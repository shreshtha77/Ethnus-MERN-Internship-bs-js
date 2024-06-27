function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username && password) {
        alert('Logging in...');
    } else {
        alert('Please enter both username and password');
    }
}