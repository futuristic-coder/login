// Import Firebase auth methods
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";

// Your web app's Firebase configuration (ensure this is your actual config)
const firebaseConfig = {
    apiKey: "AIzaSyBFRyu8a0OPfHHQpx7eIpe038xYfgk3bU4",
    authDomain: "login-49bea.firebaseapp.com",
    projectId: "login-49bea",
    storageBucket: "login-49bea.appspot.com",
    messagingSenderId: "983307995336",
    appId: "1:983307995336:web:bd4e952543494bb4087dfd",
    measurementId: "G-Q1TTV28Y9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Add event listener for the forgot password form
document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const errorElement = document.getElementById('error');

    const email = emailInput.value.trim();

    if (validateEmail(email)) {
        errorElement.style.display = 'none';
        
        // Send password reset email
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Email sent successfully
                alert('If this email is registered, a reset link will be sent to your inbox.');
                emailInput.value = '';
            })
            .catch((error) => {
                // Handle errors here
                errorElement.textContent = 'An error occurred. Please try again.';
                errorElement.style.display = 'block';
                console.error('Error sending password reset email:', error.message);
            });
    } else {
        errorElement.textContent = 'Please enter a valid email address.';
        errorElement.style.display = 'block';
    }
});

// Email validation function
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
