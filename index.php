<?php


use PHPMailer\PHPMailer\PHPMailer;
include_once "PHPMailer/PHPMailer.php";
include_once "PHPMailer/Exception.php";
include_once "PHPMailer/SMTP.php";



    if ( isset($_POST['submit']) ) {
    $subject = $_POST['subject'];
    $email = $_POST['usermail'];
    $message = $_POST['message'];

    $mail = new PHPMailer();

    //if we want to send via SMTP
    $mail->Host = "smtp.gmail.com";
    //$mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->Username = "tzimikasd@gmail.com";
    $mail->Password = "6975787089a";
    $mail->SMTPSecure = "ssl"; //TLS
    $mail->Port = 465; //587

    $mail->addAddress('tzimikasd@gmail.com');
    $mail->setFrom($email);
    $mail->Subject = $subject;
    $mail->isHTML(true);
    $mail->Body = $message;

    if ($mail->send()) {
        $subject = $email = $message = '';
        echo '<script language="javascript">';
        echo 'alert("Message sent, thank you for contacting us!")';
        echo '</script>';
    }
    else {
        echo '<script language="javascript">';
        echo 'alert("Please try again!")';
        echo '</script>';
    }
}
?>

<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="Στο site thesslaiki.gr μπορείς να βρεις την πιο κοντινή λαϊκή αγορά στο σπίτι σου με δύο μόνο κλικ!"
    />
    <meta name="keywords" content="λαϊκές, λαϊκές αγορές, Θεσσαλονίκη, thesslaiki, thesslaiki.gr, Λαϊκές αγορές Θεσσαλονίκης, φρούτα, λαχανικά, ψάρια, παζάρι">
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.thesslaiki.gr/" />
    <meta property="og:title" content="Thess Laiki" />
    <meta property="og:site_name" content="Thess Laiki" />
    <meta property="og:locale" content="el_GR" />
    <meta property="og:image" content="https://thesslaiki.gr/icons/thessLaiki.png" />
    <meta property="og:image:url" content="https://thesslaiki.gr/icons/thessLaiki.png" />
    <meta property="og:image:secure_url" content="https://thesslaiki.gr/icons/thessLaiki.png" />
    <link rel="shortcut icon" href="icons/farmstand.png" type="image/png">
    <link rel="stylesheet" type="text/css" href="css/style.min.css">
    <link rel="stylesheet" type="text/css" href="css/messenger.css">
    <link rel="stylesheet" type="text/css" href="css/contactForm.min.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet' type='text/css'>
    <link href="https://netdna.bootstrapcdn.com/font-awesome/3.0.2/css/font-awesome.css" rel="stylesheet">
    <title>Λαϊκές Αγορές Θεσσαλονίκης</title>
</head>

<body>
    <button id="directions">Πιο κοντά</button>

    <div id="map"></div>

    <div id="floating-panel">
        <img class="menuIcons" src="icons/blueHome3.png">
        <br>
        <button id="location" onclick="dropMyLocation()">Που βρίσκομαι</button>
        <br>
        <img class="menuIcons" src="icons/refresh.png">
        <br>
        <button id="resetLocation" onclick="resetLocation()">Επαναφορά Χάρτη</button>
        <br>
        <img class="menuIcons" src="icons/farmstand.png">
        <br>
        <button id="drop" onclick="dropAll()">Όλες οι Λαϊκές</button>
        <br>
        <h3 id="laikesHeader">Λαϊκές</h3>
        <hr>
        <div id="dayButtons">
            <button id="drop1" onclick="dropMonday()">Δευτέρας</button>
            <br>
            <button id="drop2" onclick="dropTuesday()">Τρίτης</button>
            <br>
            <button id="drop3" onclick="dropWednesday()">Τετάρτης</button>
            <br>
            <button id="drop4" onclick="dropThursday()">Πέμπτης</button>
            <br>
            <button id="drop5" onclick="dropFriday()">Παρασκευής</button>
            <br>
            <button id="drop6" onclick="dropSaturday()">Σαββάτου</button>
        </div>
    </div>

    <div id="travelMode">
            <strong>Μεταφορικό μέσο: </strong>
            <select id="mode" onchange="findNearestPlace();">
                <option value="DRIVING">Αμάξι</option>
                <option value="WALKING">Πόδια</option>
            </select>
        </div>

    <input id="pac-input" class="controls" type="text" placeholder="Αναζήτηση οδού">

    <div class="fb-livechat">
        <div class="ctrlq fb-overlay"></div>
        <div class="fb-widget">
            <div class="ctrlq fb-close"></div>
            <div class="fb-page" data-href="https://www.facebook.com/ThessLaiki-1533321446759981/" data-tabs="messages" data-width="360"
                data-height="400" data-small-header="true" data-hide-cover="true" data-show-facepile="false">
                <blockquote cite="https://www.facebook.com/ThessLaiki-1533321446759981/" class="fb-xfbml-parse-ignore"> </blockquote>
            </div>
            <div class="fb-credit">
                <a href="https://www.facebook.com/ThessLaiki-1533321446759981/" target="_blank">Facebook Chat Widget by Tzimikas Dimitris</a>
            </div>
            <div id="fb-root"></div>
        </div>
        <a href="https://www.facebook.com/ThessLaiki-1533321446759981/" title="Send us a message on Facebook" class="ctrlq fb-button"></a>
    </div>

    <div id="copyright-section">

        <div id="content">
            <h1>Επικοινωνία</h1>
            <br>

            <div id="info">
                <h2>thesslaiki@gmail.com</h2>
                <br>
                <h2>facebook-page:
                    <a href="https://www.facebook.com/thesslaiki/" target="_blank">ThessLaiki</a>
                </h2>
            </div>

            <form method="post" id="myForm" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
                <p><label for="usermail" class="icon-envelope"> E-mail address
                        <span class="required">*</span>
                    </label>
                    <input type="email" name="usermail" id="usermail" placeholder="I promise I hate spam too!"
                           required="required"/>
                </p>

                <p><label for="subject" class="icon-bullhorn"> Subject</label>
                    <input type="text" name="subject" id="subject" placeholder="What would you like to talk about?"/>
                </p>

                <p><label for="message" class="icon-comment"> Message
                        <span class="required">*</span>
                    </label>
                    <textarea id="message" name="message"
                              placeholder="Your message here and I'll answer as soon as possible "
                              required="required"></textarea>
                </p>

                <p class="indication">Fields with<span class="required"> * </span>are required</p>

                <input name="submit" type="submit" id="submit-form" value="Send Email">
            </form>
        </div>

        <p id="copyright">Copyright &copy; Τζημήκας Δημήτρης<span id="year"></span><p>
    </div>

    <script
            src="https://code.jquery.com/jquery-3.3.1.min.js"
            integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
            crossorigin="anonymous"></script>

    <script src="js/messenger.js"></script>
    <script src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9"></script>
    <script src="js/googleMaps.min.js"></script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDeDUKiqX7dYr97zFpM_WbndKSdUCAH6xE&libraries=places&callback=initMap">
    </script>

</body>

</html>