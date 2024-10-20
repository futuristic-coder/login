// login.js

// Import Firebase config
import './firebase.js';

// Get form elements
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Form submission event listener
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from submitting traditionally

  // Get input values
  const email = usernameInput.value;
  const password = passwordInput.value;

  // Firebase authentication method to sign in the user
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // On successful login, you get the user object
      const user = userCredential.user;
      console.log('User logged in:', user);

      // Redirect the user to the therapist dashboard
      window.location.href = "/Fronted/views/therpist-index.html";
    })
    .catch((error) => {
      // Handle login errors
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);
    });
});
