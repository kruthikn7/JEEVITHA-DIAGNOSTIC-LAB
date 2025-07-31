 document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const usernameInput = form.querySelector('input[type="text"]');
    const passwordInput = form.querySelector('#password');
    const emailInput = form.querySelector('#email');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const email = emailInput.value.trim();

        if (!username || !password || !email) {
            alert('Please fill in all fields.');
            return;
        }

        // Simple email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Login/Signup successful!\nUsername: ' + username + '\nEmail: ' + email);
        form.reset();
    });
});