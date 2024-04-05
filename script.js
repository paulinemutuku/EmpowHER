document.addEventListener('DOMContentLoaded', function () {
    // Toggle login form visibility
    function toggleLoginForm() {
        var loginForm = document.getElementById("loginForm");
        var signupForm = document.getElementById("signupForm");
        loginForm.style.display = loginForm.style.display === "block" ? "none" : "block";
        signupForm.style.display = "none"; // Hide sign-up form when login form is shown
    }

    // Toggle sign-up form visibility
    function toggleSignupForm() {
        var signupForm = document.getElementById("signupForm");
        var loginForm = document.getElementById("loginForm");
        signupForm.style.display = signupForm.style.display === "block" ? "none" : "block";
        loginForm.style.display = "none"; // Hide login form when sign-up form is shown
    }

    // Attach click event listeners to login and sign-up buttons
    const loginButton = document.querySelector('.login-button');
    const signupButton = document.querySelector('.signup-button');
    
    loginButton.addEventListener('click', function() {
        toggleLoginForm();
    });
    
    signupButton.addEventListener('click', function() {
        toggleSignupForm();
    });

    loginButton.addEventListener('click', function() {
    console.log("Login button clicked");
    toggleLoginForm();
    });

    loginButton.addEventListener('click', function() {
        console.log("Login button clicked");
        toggleLoginForm();
    });
    
    function toggleLoginForm() {
        var loginForm = document.getElementById("loginForm");
        var signupForm = document.getElementById("signupForm");
        
        // Hide signup form if it's visible
        signupForm.style.display = "none";
        
        // Toggle visibility of login form
        if (loginForm.style.display === "none") {
            loginForm.style.display = "block";
        } else {
            loginForm.style.display = "none";
        }
    }
    
     function toggleSignupForm() {
        var signupForm = document.getElementById("signupForm");
        var loginForm = document.getElementById("loginForm");
        
        // Hide login form if it's visible
        loginForm.style.display = "none";
        
        // Toggle visibility of signup form
        if (signupForm.style.display === "none") {
            signupForm.style.display = "block";
        } else {
            signupForm.style.display = "none";
        }
    }
    
});

