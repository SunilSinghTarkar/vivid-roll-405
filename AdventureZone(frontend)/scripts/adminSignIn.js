const signinForm = document.getElementById('signin-form');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const errorMessage = document.getElementById('error-message');

        signinForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Check if the username and password are correct (dummy validation)
            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            if (username === 'admin' && password === 'password') {
                // Successful sign-in, redirect to the dashboard or desired page
                window.location.href = '/AdventureZone(frontend)/html/admin.html';
            } else {
                // Show error message for incorrect credentials
                errorMessage.textContent = 'Invalid username or password.';
            }
        });