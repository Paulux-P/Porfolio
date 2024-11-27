<?php

require '../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$nom = $_POST['name'];
$prenom = $_POST['prenom'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'paul.cogitore@gmail.com';
    $mail->Password = 'eedz vwnh ozhb zpzh';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom("paul.cogitore@gmail.com", "$nom $prenom");
    $mail->addAddress('paul.cogitore@gmail.com', 'Nom du destinataire');

    $mail->Subject ="$subject";
    $mail->Body = "Message de $nom $prenom ($email): \n \n $message";

    $mail->send();
    echo 'Email envoyé avec succès.';
} catch (Exception $e) {
    echo "Erreur lors de l'envoi : {$mail->ErrorInfo}";
}

?>