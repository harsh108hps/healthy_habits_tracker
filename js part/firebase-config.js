// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmo6vrgRe52oAioDEsJUyH4Wo3g9PMaTc",
  authDomain: "healthy-habits-tracker-9b4af.firebaseapp.com",
  projectId: "healthy-habits-tracker-9b4af",
  storageBucket: "healthy-habits-tracker-9b4af.firebasestorage.app",
  messagingSenderId: "782695096074",
  appId: "1:782695096074:web:1836e2f1dca09b7755e4f3",
  measurementId: "G-34M6QG4BD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Authentication

export { auth };
