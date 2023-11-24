document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registrationForm = document.getElementById('registration-form');
    const toggleFormLink = document.getElementById('toggle-form-link');
    const toggleFormText = document.getElementById('toggle-form-text');

    const serverURL = 'http://localhost:3000'; // Update this URL with your actual server URL

    // Toggle between Login and Registration forms
    toggleFormLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (loginForm.style.display === 'block') {
            loginForm.style.display = 'none';
            registrationForm.style.display = 'block';
            toggleFormText.innerHTML = 'Already have an account? <a href="#" id="toggle-form-link">Login here</a>';
        } else {
            loginForm.style.display = 'block';
            registrationForm.style.display = 'none';
            toggleFormText.innerHTML = 'Don\'t have an account? <a href="#" id="toggle-form-link">Register here</a>';
        }
    });

    // Handle login form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Make a Fetch API request to the server for login
        fetch(`${serverURL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        .then(response => response.text())
        .then(data => alert(data));
    });

    // Handle registration form submission
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;

        // Make a Fetch API request to the server for registration
        fetch(`${serverURL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ newUsername, newPassword }),
        })
        .then(response => response.text())
        .then(data => alert(data));
    });
});
