// Import Firebase functions
import { auth } from './firebase.js'; // Ensure you import the `auth` object from your firebase.js file
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js"; // Import the create user function

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
  createUserWithEmailAndPassword(auth, email, password) // Use the imported function and auth object
    .then((userCredential) => {
      const user = userCredential.user;

      // Optionally, store additional user information in Firebase Firestore
      console.log('User signed up:', user);

      // Redirect to the therapist dashboard
      window.location.href = "/Web_tech/login/Amazone-clone/index.html";
    })
    .catch((error) => {
      // Handle signup errors
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);
    });
});
