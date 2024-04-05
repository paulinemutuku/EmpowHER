<?php
// Check if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Validate credentials (This is where you'd perform actual authentication, e.g., checking against a database)
    if ($username === "example_user" && $password === "example_password") {
        // Redirect to the main website upon successful login
        header("Location: index.html"); // Change this URL to the homepage of your main website
        exit;
    } else {
        // If authentication fails, redirect back to the login page with an error message
        header("Location: login.html?error=1");
        exit;
    }
} else {
    // If the form hasn't been submitted, redirect back to the login page
    header("Location: login.html");
    exit;
}
?>


