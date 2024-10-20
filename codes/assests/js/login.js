// Import Firebase functions
import { auth } from './firebase.js'; // Ensure you import the `auth` object from your firebase.js file
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js"; // Import the sign-in function

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
  signInWithEmailAndPassword(auth, email, password) // Use the imported function and auth object
    .then((userCredential) => {
      // On successful login, you get the user object
      const user = userCredential.user;
      console.log('User logged in:', user);

      // Redirect the user to the therapist dashboard
      window.location.href = "/login/codes/view/index.html";
    })
    .catch((error) => {
      // Handle login errors
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);
    });
});
