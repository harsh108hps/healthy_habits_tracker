// auth.js
import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { redirectToDashboard } from './dashboard.js'; // Redirect function to dashboard

// Login function
const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Login successful:", user.email);
    // Redirect to dashboard
    window.location.href = 'dashboard.html'; 
  } catch (error) {
    console.error("Error logging in:", error.message);
    alert("Invalid email or password.");
  }
};

// Signup function
const signup = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Signup successful:", user.email);
    // Redirect to dashboard after signup
    window.location.href = 'dashboard.html'; 
  } catch (error) {
    console.error("Error signing up:", error.message);
    alert("Error: " + error.message);
  }
};

// Export functions to use in login.html and signup.html
export { login, signup };
