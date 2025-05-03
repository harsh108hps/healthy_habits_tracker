import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-ud3Nx2K4LkC4NELxLqRDQRfz0cRO3nA",
  authDomain: "login-form-4cfe0.firebaseapp.com",
  projectId: "login-form-4cfe0",
  storageBucket: "login-form-4cfe0.appspot.com",
  messagingSenderId: "13942909257",
  appId: "1:13942909257:web:d5e015b2fa8bdf1cbb9298",
  measurementId: "G-8RDLS5JJSR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Now you can use: auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, setDoc, doc
