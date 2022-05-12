<?php
$email = $_POST['email'];
$nombre = $_POST['nombre'];

$header = 'From: ' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $nombre . " \r\n";
$message .= "Su correo electronico es: " . $email . " \r\n";
$message .= "\r\n";
$message .= "Enviado el: " . date('d/m/Y', time()."\r\n");
$message .= "\r\n";
$message .= "\r\nPor favor, avisale:)";

$para = 'xidoorutas@gmail.com';
$asunto = 'A ' . $nombre . ' le interesa la aplicacion.';

mail($para, $asunto, utf8_decode($message), $header);

header("Location:gracias");
?>