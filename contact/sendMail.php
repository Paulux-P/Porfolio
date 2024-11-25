<?php
$nom = $_POST['name'];
$prenom = $_POST['prenom'];
$mail = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Construire les en-têtes pour l'email
$headers = "From: $prenom $nom <$mail>\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail('hunterhwar@gmail.com', $subject, $message, $headers)) {
    // Si l'email est envoyé, rediriger l'utilisateur
    header("Location: contact.html");
    exit();
} else {
    // Si l'email échoue, afficher une erreur
    die("Une erreur est survenue lors de l'envoi de l'email.");
}
?>