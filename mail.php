<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method Not Allowed');
}

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

// $mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.example.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "hiwotalemuu@gmail.com";
$mail->Password = "hsvogzxsrllfknrb";

$mail->setFrom($email, $name);
$mail->addAddress("hiwotalemuu@gmail.com", "Hiwi");

$mail->Subject = $subject;
$mail->Body = $message;

$mail->send();

// header("Location: sent.html");

echo
"
<script>
alert( 'Sent Sucessfully');
document.location.href = 'mail.php';
</scriipt>
";
