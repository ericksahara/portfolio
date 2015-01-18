<?php
require_once 'phpmailer/class.phpmailer.php';

$nome = $_POST['nome'];
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];

$html = "<html>";
$html .= "<body>";
$html .= "<table>";
$html .= "<tr><td>Nome:</td><td>" . $nome . "</td></tr>";
$html .= "<tr><td>Email:</td><td>" . $email . "</td></tr>";
$html .= "<tr><td>Mensagem:</td><td>" . $mensagem . "</td></tr>";
$html .= "</table>";
$html .= "</body>";
$html .= "</html>";

$mail = new PHPMailer(true);

$mail->Subject = 'Contato - Erick Sahara - Portfólio';
$mail->MsgHTML($html);
$mail->AddAddress('ericksahara@gmail.com');
$mail->IsMail(true);
$mail->IsHTML(true);
$mail->From = $email;
$mail->FromName = $nome;

$mail->IsSendmail();

if (!$mail->Send()) {
	echo '<span class="msg-obr__erro">Falha ao enviar sua mensagem. </span>';
} else {
	echo '<span class="msg-obr__sucesso">Obrigado, sua mensagem foi enviada com sucesso!</span>';
}

?>
