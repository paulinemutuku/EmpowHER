<?php
// Set the recipient email address
$recipient_email = "paulahmutuku101@gmail.com";

// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Set the email subject
$subject = "Message from $name";

// Compose the email message
$email_message = "Name: $name\n";
$email_message .= "Email: $email\n\n";
$email_message .= "Message:\n$message";

// Send the email
mail($recipient_email, $subject, $email_message);

// Redirect back to the contact page
header("Location: index.html");
?>

