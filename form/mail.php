<?php
$email = $_POST['from'];
$subject = $_POST['sub'];
$message = $_POST['message'];
$formcontent="From: $email \n Subject: $subject \n Message: $message";
$recipient = "noreply@cooldance.cz";
$subject = "Zprava z CoolDance";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
$thankyou = 'Dekujeme za Vasi zpravu!';
header("Location: http://www.cooldance.cz/index.php/cz/kurzy/");
die();
?>
