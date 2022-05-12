<?php
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$asunto = $_POST['asunto'];
$email = $_POST['correo'];

$header = 'From: ' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $nombre . " \r\n";
$message .= "Su e-mail es: " . $email . " \r\n";
$message .= "Su numero de telefono es: " . $telefono . " \r\n";
$message .= "\r\n";
$message .= $nombre . " quiere decir: ". $asunto . " \r\n";
$message .= "\r\n";
$message .= "Enviado el: " . date('d/m/Y', time()."\r\n");

$para = 'xidoorutas@gmail.com';
$asunto = 'El usuario: '. $nombre . ' quiere contactarnos!';

mail($para, $asunto, utf8_decode($message), $header);

header("Location:recibido");
?>