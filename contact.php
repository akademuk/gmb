<?php

define ("SUBJECT", "Лист з сайту Казахи"); /* тема письма */
define ("EMAIL_TO", "akademuk24@gmail.com"); /* куда отправляем */ 


$post = (!empty($_POST)) ? true : false;

if ($post) {
    $name = htmlspecialchars($_POST['name']);
    // $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $error = '';


    if (!$error) {
		$to = EMAIL_TO;
		$subject = SUBJECT;
		// текст письма
		$message = '
                <html>
                <head>
                <title>' . SUBJECT . '</title>
                </head>
                <body>
                <table>
                    <tr>
                    <td>Ім\'я</td>
                    <td>' . $name . '</td>
                    </tr>
                    <tr>
                    <td>Телефон</td>
                    <td>' . $phone . '</td>
                    </tr>
                </table>
                </body>
                </html>
                ';
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

		$mail = mail($to, $subject, $message, $headers);

		// отправляем сообщение в Telegram

		if ($mail) {
			echo 'OK';
		}
	} else {
		echo '<div class="notification_error">' . $error . '</div>';
	}
}
