// signup.js

// Import Firebase config
import './firebase.js';

// Get form elements
const signupForm = document.getElementById('signupForm');
const usernameInput = document.getElementById('username');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

// Form submission event listener
signupForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from submitting traditionally

  // Get input values
  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Check if passwords match
  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  // Firebase authentication method to create a new user
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Optionally, store additional user information in Firebase Firestore
      console.log('User signed up:', user);

      // Redirect to the therapist dashboard
      window.location.href = "/Fronted/views/therpist-index.html";
    })
    .catch((error) => {
      // Handle signup errors
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);
    });
});
``
