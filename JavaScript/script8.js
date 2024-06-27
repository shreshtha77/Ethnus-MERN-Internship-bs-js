function register() {
    const password = document.getElementById('password').value;
    const rePassword = document.getElementById('re-password').value;
    const phoneNumber = document.getElementById('phone-number').value;

    let valid = true;

    // Password validation
    if (password.length < 6) {
        document.getElementById('password-error').textContent = 'POOR';
        valid = false;
    } else {
        document.getElementById('password-error').textContent = '';
    }

    if (password !== rePassword) {
        document.getElementById('re-password-error').textContent = 'POOR OR MISMATCH';
        valid = false;
    } else {
        document.getElementById('re-password-error').textContent = '';
    }

    // Phone number validation
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneNumber)) {
        document.getElementById('phone-error').textContent = 'INVALID';
        valid = false;
    } else {
        document.getElementById('phone-error').textContent = '';
    }

    if (valid) {
        alert('Registration successful!');
    }
}