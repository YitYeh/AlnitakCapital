<?php
	// Only process POST 	requests
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		// Get the form fields and remove whitespace
		$name = strip_tags(trim($_POST["sender_name"]));
		$name = str_replace(array("\r", "\n"), array(" ", " "), $name);
		$email = filter_var(trim($_POST["sender_email"]), FILTER_SANITIZE_EMAIL);
		$message = trim($_POST["sender_message"]);
		
		// Check that the data was sent to the mailer
		if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
			// Set a 400 (bad request) response code and exit
			http_response_code(400);
			echo "There was a problem with your submission. Please complete the form and try again.";
			exit;
		}
		
		// Set the recipient email address
		// FIXME: Update this to your desired email address
		$recipient = "jkatz94@gmail.com";
		
		// Set the email subject
		$subject = "New message from $name";
		
		// Build the email content
		$email_content = "Name: $name\n";
		$email_content .= "Email: $email\n\n";
		$email_content .= "Message:\n$message\n";
		
		// Build the email headers
		$email_headers = "From: $name <$email>";
		
		// Send the email
		if (mail($recipient, $subject, $email_content, $email_headers)) {
			// Set a 200 (okay) response code
			http_response_code(200);
			echo "Your message was successfully sent!";
		} else {
			// Set a 500 (internal server error) response code
			http_response_code(500);
			echo "Something went wrong and we couldn't send your message.";
		}
	}
?>