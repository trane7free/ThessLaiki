// ----------------- Μεταβλητές -----------------
var thessaloniki = {
    lat: 40.6210354,
    lng: 22.9367118
};
var infoWindow;
var map;
var markers = [];
var myLocationMarker = [];
var searchMarker = [];
var flightPath;
var places;
var mylocation = null;
var daySelected;
var directionsService;
var directionsDisplay;
var min = 100000;
var minLocation;
var pos;
var request;
var j;

// ----------------- Λαϊκές Δευτέρας -----------------
var karaiskaki = {
    position: {
        lat: 40.614216,
        lng: 22.956407
    },
    title: 'Καραϊσκάκη (Δευτέρα)',
    flightPlanCoordinates: [{
        lat: 40.614324,
        lng: 22.954168
    },
    {
        lat: 40.614120,
        lng: 22.957704
    },
    {
        lat: 40.614218,
        lng: 22.956010
    },
    {
        lat: 40.614664,
        lng: 22.956026
    },
    {
        lat: 40.615131,
        lng: 22.956048
    },
    {
        lat: 40.615704,
        lng: 22.955989
    }
    ]
};
var allatini = {
    position: {
        lat: 40.608893,
        lng: 22.959352
    },
    title: 'Αλλατίνη (Δευτέρα)'
};
var gianniAggelou = {
    position: {
        lat: 40.599781,
        lng: 22.972742
    },
    title: 'Γιάννη Αγγέλου (γήπεδο ΑΡΗ)(Δευτέρα)'
};
var katwToumpa = {
    position: {
        lat: 40.608795,
        lng: 22.973369
    },
    title: 'Κάτω Τούμπα (Αρτάκης)(Δευτέρα)'
};
var anwToumpa = {
    position: {
        lat: 40.617840,
        lng: 22.974975
    },
    title: 'Άνω Τούμπα (Εμπεδοκλέους)(Δευτέρα)'
};
var anwIlioupoli = {
    position: {
        lat: 40.671243,
        lng: 22.932063
    },
    title: 'Άνω Ηλιούπολη (Δευτέρα)'
};
var menemeni = {
    position: {
        lat: 40.657189,
        lng: 22.909962
    },
    title: 'Μενεμένη (Δευτέρα)'
};
var neapoliMitropoleos = {
    position: {
        lat: 40.654462,
        lng: 22.948576
    },
    title: 'Νεάπολη Μητροπόλεως (Δευτέρα)'
};



// ----------------- Λαϊκές Τρίτης -----------------

var sarantaEkklisies = {
    position: {
        lat: 40.633087,
        lng: 22.964365
    },
    title: '40 Εκκλησιές (Τρίτη)',
    flightPlanCoordinates: [{
        lat: 40.633132,
        lng: 22.964327
    },
    {
        lat: 40.633017,
        lng: 22.964427
    },
    {
        lat: 40.632470,
        lng: 22.965636
    }
    ]
};
var papadaki = {
    position: {
        lat: 40.592971,
        lng: 22.962420
    },
    title: 'Παπαδάκη (Τρίτη)'
};
var katwIlioupoli = {
    position: {
        lat: 40.664885,
        lng: 22.924283
    },
    title: 'Κάτω Ηλιούπολη (Ευόσμου)(Τρίτη)'
};
var zwodoxouPigis = {
    position: {
        lat: 40.653874,
        lng: 22.917734
    },
    title: 'Ζωοδόχου Πηγής (Αμπελοκήπων)(Τρίτη)'
};
var eleutherioKordelio = {
    position: {
        lat: 40.666004,
        lng: 22.898104
    },
    title: 'Ελευθέριο Κορδελιό (Τρίτη)'
};
var malakopiPulaias = {
    position: {
        lat: 40.609184,
        lng: 22.981907
    },
    title: 'Μαλακοπή Πυλαίας (Τρίτη)'
};
var neaKriniKalamaria = {
    position: {
        lat: 40.567952,
        lng: 22.961275
    },
    title: 'Ν.Κρήνη Καλαμαριά (Τρίτη)'
};
var dimarxeioEuosmou = {
    position: {
        lat: 40.670076,
        lng: 22.910210
    },
    title: 'Δημαρχείο Ευόσμου (Τρίτη)'
};
var ormiliasBoga = {
    position: {
        lat: 40.598441,
        lng: 22.953534
    },
    title: 'Ορμυλίας - Κίμ. Βογά (Τρίτη)'
};
var kanariPolixnis = {
    position: {
        lat: 40.659422,
        lng: 22.943165
    },
    title: 'Κανάρη Πολίχνης (Τρίτη)'
};


// ----------------- Λαϊκές Τετάρτης -----------------

var anwToumpaPaok = {
    position: {
        lat: 40.615827,
        lng: 22.972914
    },
    title: 'Άνω Τούμπα (γήπεδο ΠΑΟΚ)(Τετάρτη)'
};
var solonosKritis = {
    position: {
        lat: 40.599661,
        lng: 22.958168
    },
    title: 'Σόλωνος - Κρήτης (Τετάρτη)'
};
var litoxorou = {
    position: {
        lat: 40.621261,
        lng: 22.961052
    },
    title: 'Λιτοχώρου (Παπάφη)(Τετάρτη)'
};
var paulouMela = {
    position: {
        lat: 40.657485,
        lng: 22.932348
    },
    title: 'Π.Μελά (Σταυρούπολη)(Τετάρτη)'
};
var sukies = {
    position: {
        lat: 40.650510,
        lng: 22.948070
    },
    title: 'Ρήγα Φεραίου (Συκιές)(Τετάρτη)'
};
var davakiSukies = {
    position: {
        lat: 40.644968,
        lng: 22.952959
    },
    title: 'Συνταγματάρχου Δαβάκη (Συκιές)(Τετάρτη)'
};
var flemingPolixni = {
    position: {
        lat: 40.668732,
        lng: 22.941738
    },
    title: 'Φλέμινγκ (Πολίχνη)(Τετάρτη)'
};

// ----------------- Λαϊκές Πέμπτης -----------------
var kalamariaAmisou = {
    position: {
        lat: 40.585438,
        lng: 22.951895
    },
    title: 'Καλαμαριά Αμισού (Πέμπτης)'
};
var kanari = {
    position: {
        lat: 40.607259,
        lng: 22.968076
    },
    title: 'Κανάρη (Αλ.Παπαναστασίου)(Πέμπτης)'
};
var kalithea = {
    position: {
        lat: 40.645452,
        lng: 22.939820
    },
    title: 'Καλλιθέα (Όπισθεν Υδραγωγείου)(Πέμπτης)',
    flightPlanCoordinates: [{
        lat: 40.645030,
        lng: 22.939437
    },
    {
        lat: 40.645992,
        lng: 22.940274
    },
    {
        lat: 40.646397,
        lng: 22.940073
    },
    {
        lat: 40.646999,
        lng: 22.939305
    }
    ]
};
var gkratsiou = {
    position: {
        lat: 40.641176,
        lng: 22.946566
    },
    title: 'Κων/νου Γκάρτσιου (περιοχή Αγ.Δημητρίου)(Πέμπτης)',
    flightPlanCoordinates: [{
        lat: 40.641855,
        lng: 22.946301
    },
    {
        lat: 40.640550,
        lng: 22.946850
    },
    {
        lat: 40.640474,
        lng: 22.946859
    },
    {
        lat: 40.640245,
        lng: 22.946665
    },
    {
        lat: 40.640474,
        lng: 22.946859
    },
    {
        lat: 40.640550,
        lng: 22.946850
    },
    {
        lat: 40.640725,
        lng: 22.947357
    }
    ]
};
var polixniFilippou = {
    position: {
        lat: 40.659576,
        lng: 22.949581
    },
    title: 'Φιλίππου (Πολίχνη)(Πέμπτης)'
};
var paulouMelaPulaia = {
    position: {
        lat: 40.598852,
        lng: 22.991117
    },
    title: 'Παύλου Μελά (Πυλαία)(Πέμπτης)'
};
var agPaulos = {
    position: {
        lat: 40.639921,
        lng: 22.961981
    },
    title: 'Ηπείρου (Άγιος Παύλος)(Πέμπτης)'
};
var foinikas = {
    position: {
        lat: 40.571487,
        lng: 22.971594
    },
    title: 'Εθν.Αντιστάσεως (Φοίνικας)(Πέμπτης)'
};
var dedropotamos = {
    position: {
        lat: 40.656793,
        lng: 22.899468
    },
    title: 'Δενδροπόταμος (Μενεμένης)(Πέμπτης)'
};
var nikopoli = {
    position: {
        lat: 0.682993,
        lng: 22.933828
    },
    title: 'Νικόπολη (Σταυρούπολη)(Πέμπτης)'
};

// ----------------- Λαϊκές Παρασκευής -----------------
var triandria = {
    position: {
        lat: 40.620231,
        lng: 22.971845
    },
    title: 'Ορτανσίας (Τριανδρία)(Παρασκευή)'
};
var xatzilazarou = {
    position: {
        lat: 40.606243,
        lng: 22.956143
    },
    title: 'Χατζηλαζάρου (Μπότσαρη)(Παρασκευή)'
};
var kifisiaKalamaria = {
    position: {
        lat: 40.586650,
        lng: 22.967149
    },
    title: 'Κηφισιά (Καλαμαριά)(Παρασκευή)'
};
var stauroupoli = {
    position: {
        lat: 40.664176,
        lng: 22.935685
    },
    title: 'Μεσολογγίου (Σταυρούπολη)(Παρασκευή)'
};
var euosmosParko = {
    position: {
        lat: 40.663723,
        lng: 22.911749
    },
    title: 'Πάρκο Ελπίδος (Εύοσμος)(Παρασκευή)'
};
var kautatzoglou = {
    position: {
        lat: 40.621781,
        lng: 22.954716
    },
    title: 'Καυτατζόγλου (Παρασκευή)',
    flightPlanCoordinates: [{
        lat: 40.623345,
        lng: 22.955977
    },
    {
        lat: 40.622706,
        lng: 22.953330
    },
    {
        lat: 40.622897,
        lng: 22.954180
    },
    {
        lat: 40.622360,
        lng: 22.954518
    },
    {
        lat: 40.621818,
        lng: 22.954636
    }
    ]
};
var meteoraPolixnis = {
    position: {
        lat: 40.656370,
        lng: 22.957325
    },
    title: 'Μετέωρα (Πολίχνης)(Παρασκευή)'
};
var andromaxis = {
    position: {
        lat: 40.676204,
        lng: 22.902111
    },
    title: 'Ανδρομάχης Ευόσμου (Παρασκευή)'
};

// ----------------- Λαϊκές Σαββάτου -----------------
var martiou = {
    position: {
        lat: 40.599412,
        lng: 22.962763
    },
    title: 'Μαρτίου (Σαββάτου)'
};
var ksirokrini = {
    position: {
        lat: 40.649833,
        lng: 22.928589
    },
    title: 'Ξηροκρήνη (Αμπελόκηποι)(Σαββάτου)'
};
var neapoli = {
    position: {
        lat: 40.653631,
        lng: 22.936513
    },
    title: 'Αγ.Στεφάνου (Νεάπολη)(Σαββάτου)'
};
var pausania = {
    position: {
        lat: 40.614206,
        lng: 22.981209
    },
    title: 'Παυσανία (Άνω Τούμπα)(Σαββάτου)'
};
var kordelio = {
    position: {
        lat: 40.671766,
        lng: 22.892302
    },
    title: 'Σιατίστης (Κορδελιό)(Σαββάτου)'
};
var agNikolaos = {
    position: {
        lat: 40.576257,
        lng: 22.951476
    },
    title: 'Άγιος Νικόλαος (Καλαμαριά)(Σαββάτου)'
};
var euosmos = {
    position: {
        lat: 40.676754,
        lng: 22.923335
    },
    title: 'Ιθάκης (Εύοσμος)(Σαββάτου)'
};


// ----------------- Λίστα με όλες τις Λαϊκές -----------------
var olesOiLaikes = [
    karaiskaki,
    allatini,
    gianniAggelou,
    katwToumpa,
    anwToumpa,
    anwIlioupoli,
    menemeni,
    neapoliMitropoleos,
    sarantaEkklisies,
    papadaki,
    katwIlioupoli,
    zwodoxouPigis,
    eleutherioKordelio,
    malakopiPulaias,
    neaKriniKalamaria,
    dimarxeioEuosmou,
    ormiliasBoga,
    kanariPolixnis,
    anwToumpaPaok,
    solonosKritis,
    litoxorou,
    paulouMela,
    sukies,
    davakiSukies,
    flemingPolixni,
    kalamariaAmisou,
    kanari,
    kalithea,
    gkratsiou,
    polixniFilippou,
    paulouMelaPulaia,
    agPaulos,
    foinikas,
    dedropotamos,
    nikopoli,
    triandria,
    xatzilazarou,
    kifisiaKalamaria,
    stauroupoli,
    euosmosParko,
    kautatzoglou,
    meteoraPolixnis,
    andromaxis,
    martiou,
    ksirokrini,
    neapoli,
    pausania,
    kordelio,
    agNikolaos,
    euosmos
];

// ----------------- Λίστες με τις Λαϊκές ανα μέρα -----------------
var laikesDeuteras = [
    karaiskaki,
    allatini,
    gianniAggelou,
    katwToumpa,
    anwToumpa,
    anwIlioupoli,
    menemeni,
    neapoliMitropoleos
];

var laikesTritis = [
    sarantaEkklisies,
    papadaki,
    katwIlioupoli,
    zwodoxouPigis,
    eleutherioKordelio,
    malakopiPulaias,
    neaKriniKalamaria,
    dimarxeioEuosmou,
    ormiliasBoga,
    kanariPolixnis
];

var laikesTetartis = [
    anwToumpaPaok,
    solonosKritis,
    litoxorou,
    paulouMela,
    sukies,
    davakiSukies,
    flemingPolixni
];

var laikesPemptis = [
    kalamariaAmisou,
    kanari,
    kalithea,
    gkratsiou,
    polixniFilippou,
    paulouMelaPulaia,
    agPaulos,
    foinikas,
    dedropotamos,
    nikopoli
];

var laikesParaskeuis = [
    triandria,
    xatzilazarou,
    kifisiaKalamaria,
    stauroupoli,
    euosmosParko,
    kautatzoglou,
    meteoraPolixnis,
    andromaxis
];

var laikesSavvatou = [
    martiou,
    ksirokrini,
    neapoli,
    pausania,
    kordelio,
    agNikolaos,
    euosmos
];


// ----------------- Συναρτήσεις εμφάνισης εικόνων λαίκών -----------------
function dropAll() {
    daySelected = 'all';
    resetLaikes();
    for (var i = 0; i < olesOiLaikes.length; i++) {
        addMarkerWithTimeout(olesOiLaikes[i], i * 30);
    }
}

function dropMonday() {
    daySelected = 'monday';
    resetLaikes();
    for (var i = 0; i < laikesDeuteras.length; i++) {
        addMarkerWithTimeout(laikesDeuteras[i], i * 100);
    }
}

function dropTuesday() {
    daySelected = 'tuesday';
    resetLaikes();
    for (var i = 0; i < laikesTritis.length; i++) {
        addMarkerWithTimeout(laikesTritis[i], i * 100);
    }

}

function dropWednesday() {
    daySelected = 'wednesday';
    resetLaikes();
    for (var i = 0; i < laikesTetartis.length; i++) {
        addMarkerWithTimeout(laikesTetartis[i], i * 100);
    }
}

function dropThursday() {
    daySelected = 'thursday';
    resetLaikes();
    for (var i = 0; i < laikesPemptis.length; i++) {
        addMarkerWithTimeout(laikesPemptis[i], i * 100);
    }
}

function dropFriday() {
    daySelected = 'friday';
    resetLaikes();
    for (var i = 0; i < laikesParaskeuis.length; i++) {
        addMarkerWithTimeout(laikesParaskeuis[i], i * 100);
    }
}

function dropSaturday() {
    daySelected = 'saturday';
    resetLaikes();
    for (var i = 0; i < laikesSavvatou.length; i++) {
        addMarkerWithTimeout(laikesSavvatou[i], i * 100);
    }
}

// ----------------- Καθαρισμός Markers -----------------
function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}

function clearSearchMarkers() {
    for (var i = 0; i < searchMarker.length; i++) {
        searchMarker[i].setMap(null);
    }
    searchMarker = [];
}

function clearMyLocationMarker() {
    for (var i = 0; i < myLocationMarker.length; i++) {
        myLocationMarker[i].setMap(null);
    }
    myLocationMarker = [];
    mylocation = null;
}

// ----------------- Εκτέλεση Χάρτη -----------------
function initMap() {

    directionsService = new google.maps.DirectionsService;
    directionsDisplay = new google.maps.DirectionsRenderer({
        suppressMarkers: true
    });

    //  Map options
    var options = {
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
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input);

    map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
    });

    searchBox.addListener('places_changed', function () {
        places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        searchMarker.forEach(function (marker) {
            marker.setMap(null);
        });
        searchMarker = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            var searchMark;

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
    var temp = null;
    if (daySelected == 'monday') {
        temp = laikesDeuteras;
    } else if (daySelected == 'tuesday') {
        temp = laikesTritis;
    } else if (daySelected == 'wednesday') {
        temp = laikesTetartis;
    } else if (daySelected == 'thursday') {
        temp = laikesPemptis;
    } else if (daySelected == 'friday') {
        temp = laikesParaskeuis;
    } else if (daySelected == 'saturday') {
        temp = laikesSavvatou;
    } else if (daySelected == 'all') {
        temp = olesOiLaikes;
    }

    j = temp.length;
    while (j--) {

        getDistanceFromLatLonInKm(pos.lat, pos.lng, temp[j].position.lat, temp[j].position.lng);

        function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
            var R = 6371; // Radius of the earth in km
            var dLat = deg2rad(lat2 - lat1); // deg2rad below
            var dLon = deg2rad(lon2 - lon1);
            var a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c; // Distance in km
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

    var selectedMode = document.getElementById('mode').value;

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

        var marker = new google.maps.Marker({
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

        navigator.geolocation.getCurrentPosition(function (position) {
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            pos2 = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            mylocation = new google.maps.Marker({
                position: pos,
                map: map,
                animation: google.maps.Animation.DROP,
                title: 'Η τοποθεσία μου',
                icon: 'icons/home-2.png'
            });

            mylocation.addListener('click', function () {
                pos = pos2;
                map.setZoom(19);
                map.setCenter(pos);
            });

            myLocationMarker.push(mylocation);

            map.setZoom(14);
            map.setCenter(pos);

        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

// ----------------- Επαναφορά Χάρτη -----------------
function resetLocation() {
    var resetPos = {
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

    if (flightPath != null) {
        flightPath.setMap(null);
    }

    directionsDisplay.set('directions', null);
}

function resetLaikes() {
    var resetPos = {
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
