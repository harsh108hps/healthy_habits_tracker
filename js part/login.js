// login.js
import { login } from './auth';

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from submitting normally

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Call login function from auth.js
  login(email, password);
});
