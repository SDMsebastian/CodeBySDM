<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST["nombre"];
  $email = $_POST["email"];
  $mensaje = $_POST["mensaje"];
 
  echo "Gracias por contactarnos, $nombre. Te hemos enviado un correo electrónico a $email.";
}
?>
