// signup.js

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
  event.preventDefault();

  // Get input values
  const username = usernameInput.value;
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const phone = phoneInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Simple password confirmation check
  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  // Create user with Firebase Authentication
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Optionally store additional user info (like username, phone) in Firebase Database or Firestore
      console.log('User signed up:', user);

      // Redirect on successful signup
      window.location.href = "/Fronted/views/therpist-index.html";  // Redirect to the therapist dashboard or another page
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);
    });
});
