document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login process
    if (username === "user" && password === "password") {
        alert('Login successful!');
        // Redirect to the main page of the movie recommendation website
        window.location.href = 'home.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
