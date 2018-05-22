// ----------------- Μεταβλητές -----------------
let thessaloniki = {
    lat: 40.6210354,
    lng: 22.9367118
};
let infoWindow;
let map;
let markers = [];
let myLocationMarker = [];
let searchMarker = [];
let flightPath;
let places;
let myLocation = null;
let directionsService;
let directionsDisplay;
let min = 100000;
let minLocation;
let pos;
let request;
let j;
let locations = [];
let temp = [];
const endpointLaikes = 'https://raw.githubusercontent.com/DimitrisTzimikas/ThessLaiki/master/json/laikes.json';

fetch(endpointLaikes)
    .then(blob => blob.json())
    .then(data => locations.push(...data));

// ----------------- Συναρτήσεις εμφάνισης εικόνων λαίκών -----------------
function dropMarkers(x) {
    temp = [];
    if(x === 'all'){
        resetLaikes();
        for (let i = 0; i < locations.length; i++) {
            addMarkerWithTimeout(locations[i], i * 20);
            temp.push(locations[i]);
        }
    }
    else {
        let z = 0;
        for(let i = 0; i < locations.length; i++){
            if(x === locations[i].day) {
                resetLaikes();
                addMarkerWithTimeout(locations[i], z * 30);
                temp.push(locations[i]);
                z++;
            }
        }
    }
}

// ----------------- Καθαρισμός Markers -----------------
function clearMarkers() {
    for (let i = 0; i < markers.length; i++)
        markers[i].setMap(null);
    markers = [];
}

function clearSearchMarkers() {
    for (let i = 0; i < searchMarker.length; i++)
        searchMarker[i].setMap(null);
    searchMarker = [];
}

function clearMyLocationMarker() {
    for (let i = 0; i < myLocationMarker.length; i++)
        myLocationMarker[i].setMap(null);
    myLocationMarker = [];
    myLocation = null;
}

// ----------------- Εκτέλεση Χάρτη -----------------
function initMap() {

    directionsService = new google.maps.DirectionsService;
    directionsDisplay = new google.maps.DirectionsRenderer({
        suppressMarkers: true
    });

    //  Map options
    let options = {
        disableDefaultUI: true,
        zoom: 12,
        center: thessaloniki,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        }
    };

    //  New map creation
    map = new google.maps.Map(document.getElementById('map'), options);

    directionsDisplay.setMap(map);

    // Αναζήτηση τοποθεσίας
    let input = document.getElementById('pac-input');
    let searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input);

    map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
    });

    searchBox.addListener('places_changed', function () {
        places = searchBox.getPlaces();

        if (places.length === 0) {
            return;
        }

        // Clear out the old markers.
        searchMarker.forEach(function (marker) {
            marker.setMap(null);
        });
        searchMarker = [];

        // For each place, get the icon, name and location.
        let bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            let icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            let searchMark;

            searchMark = new google.maps.Marker({
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location
            });

            searchMark.addListener('click', function () {
                map.setZoom(19);
                map.setCenter(place.geometry.location);
                pos = {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng()
                };
            });

            searchMarker.push(searchMark);

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });

    // Calculate distance
    document.getElementById('directions').addEventListener('click', findNearestPlace);
}

// ----------------- Υπολογισμός απόστασης -----------------
function findNearestPlace() {
    min = 10000;

    j = temp.length;
    while (j--) {
        getDistanceFromLatLonInKm(pos.lat, pos.lng, temp[j].position.lat, temp[j].position.lng);

        function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
            let R = 6371; // Radius of the earth in km
            let dLat = deg2rad(lat2 - lat1); // deg2rad below
            let dLon = deg2rad(lon2 - lon1);
            let a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
            let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            let d = R * c; // Distance in km
            if (d <= min) {
                min = d;
                minLocation = temp[j];
                /*console.log(minLocation);*/
            }
        }

        function deg2rad(deg) {
            return deg * (Math.PI / 180)
        }
    }

    let selectedMode = document.getElementById('mode').value;

    request = {
        origin: pos,
        destination: minLocation.position,
        travelMode: google.maps.TravelMode[selectedMode]
        /*travelMode: google.maps.TravelMode.DRIVING*/
    };

    directionsService.route(request, function (response, status) {
        console.log(status);
        if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        } else if (status === google.maps.DirectionsStatus.OVER_QUERY_LIMIT) {
            console.log("error");
        }
    });
}

// -----------------  Υπογράμμιση δρόμων που βρίσκονται οι λαϊκές -----------------
function addMarkerWithTimeout(markets, timeout) {
    window.setTimeout(function () {

        let marker = new google.maps.Marker({
            position: markets.position,
            map: map,
            animation: google.maps.Animation.DROP,
            title: markets.title,
            icon: 'icons/farmstand.png'
        });

        marker.addListener('click', function () {
            map.setZoom(18);
            map.setCenter(marker.getPosition());

            flightPath = new google.maps.Polyline({
                path: markets.flightPlanCoordinates,
                geodesic: true,
                strokeColor: '#2aff4d',
                strokeOpacity: 1.0,
                strokeWeight: 10
            });

            flightPath.setMap(map);
        });

        markers.push(marker);
    }, timeout);
}

// ----------------- Τοποθεσία Πελάτη -----------------
function dropMyLocation() {

    clearMyLocationMarker();
    //  Geolocation
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition( position => {
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            pos2 = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            myLocation = new google.maps.Marker({
                position: pos,
                map: map,
                animation: google.maps.Animation.DROP,
                title: 'Η τοποθεσία μου',
                icon: 'icons/home-2.png'
            });

            myLocation.addListener('click', function () {
                pos = pos2;
                map.setZoom(19);
                map.setCenter(pos);
            });

            myLocationMarker.push(myLocation);

            map.setZoom(14);
            map.setCenter(pos);

        }, () => {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

// ----------------- Επαναφορά Χάρτη -----------------
function resetLocation() {
    temp = [];
    let resetPos = {
        zoom: 12,
        center: {
            lat: 40.6210354,
            lng: 22.9367118
        }
    };
    map.setZoom(resetPos.zoom);
    map.setCenter(resetPos.center);

    clearMarkers();
    markers = [];
    clearSearchMarkers();
    searchMarker = [];
    resetLaikes();

    if (flightPath != null) {
        flightPath.setMap(null);
    }

    directionsDisplay.set('directions', null);
}

function resetLaikes() {
    let resetPos = {
        zoom: 12,
        center: {
            lat: 40.6210354,
            lng: 22.9367118
        }
    };
    map.setZoom(resetPos.zoom);
    map.setCenter(resetPos.center);

    clearMarkers();
    markers = [];

    if (flightPath != null) {
        flightPath.setMap(null);
    }

    directionsDisplay.set('directions', null);
}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

// ----------------- Δυναμική εμφάνιση χρονολογίας -----------------
document.getElementById("year").innerHTML = new Date().getFullYear();
