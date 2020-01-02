<?php
// BEGIN CONFIGURATION ////////////////////////////////////////////////

define('EMAIL_TO', 'konradmax91@gmail.com');
define('EMAIL_SUBJECT', 'Email Subject');
define('CAPTCHA_ENABLED', '1'); // 0 - Disabled, 1 - Enabled

if ($_POST) {
	$name = $_POST['name'];
	$email = $_POST['email']; 
	$msg = $_POST['msg'];

// Error handling
	if (empty($name) || empty($email) || empty($message)) { $msg = 'One or more fields is blank!'; }
	else if (!$email == '' && (!strstr($email,'@') || !strstr($email,'.'))) { $msg = 'Your email address is not formatted correctly!'; }
	else if (($captcha1 + $captcha2) != $captcha) { $msg = 'Anti-spam incorrect! Please try again.'; }

// Build email headers
	else {
		$headers = "From: ".$name." <".$email.">\r\n";
		$headers .= "Reply-To: ".$name." <".$email.">\r\n";
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Build email body
		$body = '
		<html><body>
<table border="0" cellspacing="0" cellpadding="0" width="100%">
<tr><td style="border-bottom: solid 1px #CCC; font-size:18px; font-weight:bold; padding:10px;" colspan="2">'.$email_subject.'</td></tr>
<tr><td valign="top" style="padding:10px; border-bottom: solid 1px #CCC;" valign="top"><b>Name:</b></td><td style="padding:10px; border-bottom: solid 1px #CCC;">'.$name.' ('.$email.')</td>
</tr>
<tr><td valign="top" style="padding:10px; border-bottom: solid 1px #CCC;" valign="top"><b>Message:</b></td><td style="padding:10px; border-bottom: solid 1px #CCC;">'.$msg.'</td></tr>
</table>
</body></html>';

// Send the email, reset text boxes on form, and show success message
		mail(EMAIL_TO, EMAIL_SUBJECT, $body, $headers);
		$name = '';
		$email = '';
		$message = '';
		$msg = 'Message Sent!';
	}
}
?>