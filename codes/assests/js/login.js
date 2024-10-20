// login.js

// Get the form elements
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Form submission event listener
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get input values
  const email = usernameInput.value;
  const password = passwordInput.value;

  // Sign in using Firebase Authentication
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;
      console.log('User logged in:', user);
      window.location.href = "/Fronted/views/therpist-index.html";  // Redirect on success
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);
    });
});
