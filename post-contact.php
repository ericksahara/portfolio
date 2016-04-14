<?php
require_once 'phpmailer/class.phpmailer.php';
$params = json_decode(file_get_contents('php://input'),true);

$nome = $params['name'];
$email = $params['email'];
$mensagem = $params['message'];

$html = "<html>";
$html .= "<body>";
$html .= "<table>";
$html .= "<tr><td>Name:</td><td>" . $nome . "</td></tr>";
$html .= "<tr><td>Email:</td><td>" . $email . "</td></tr>";
$html .= "<tr><td>Message:</td><td>" . $message . "</td></tr>";
$html .= "</table>";
$html .= "</body>";
$html .= "</html>";

$mail = new PHPMailer(true);

$mail->Subject = 'Contact - Portfolio';
$mail->MsgHTML($html);
$mail->AddAddress('ericksahara@gmail.com');
$mail->IsMail(true);
$mail->IsHTML(true);
$mail->From = $email;
$mail->FromName = $nome;

$mail->IsSendmail();

if (!$mail->Send()) {
	echo '<div class="response-contact response-contact-success">Thank you, Your message has been sent successfully!</div>';
} else {
	echo '<div class="response-contact response-contact-error">There was an error sending your message, please try again.</div>';
}

?>
