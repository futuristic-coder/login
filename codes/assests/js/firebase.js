// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

// Your Firebase configuration
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
const auth = getAuth(app); // Initialize Firebase Authentication

// Export auth for use in other files
export { auth };
