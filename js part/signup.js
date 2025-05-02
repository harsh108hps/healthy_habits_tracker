// signup.js
import { signup } from './auth.js';

document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from submitting normally

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Call signup function from auth.js
  signup(email, password);
});
