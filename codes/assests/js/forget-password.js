document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const errorElement = document.getElementById('error');

    const email = emailInput.value.trim();

    if (validateEmail(email)) {
        errorElement.style.display = 'none';
        alert('If this email is registered, a reset link will be sent to your inbox.');
        emailInput.value = '';
    } else {
        errorElement.textContent = 'Please enter a valid email address.';
        errorElement.style.display = 'block';
    }
});

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
