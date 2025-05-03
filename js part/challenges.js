// Import Firebase dependencies
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { app } from './firebase-config.js'; // make sure this exports `app`

const db = getFirestore(app);

// DOM references
const challengeForm = document.getElementById("challenge-form");
const challengeList = document.getElementById("challenge-list");

// Create a new challenge
challengeForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("challenge-title").value;
  const duration = parseInt(document.getElementById("challenge-duration").value);

  if (!title || !duration) {
    alert("Please fill all fields");
    return;
  }

  try {
    await addDoc(collection(db, "challenges"), {
      title,
      duration,
      createdAt: new Date()
    });

    alert("Challenge created!");
    challengeForm.reset();
    loadChallenges();

  } catch (err) {
    console.error("Error adding challenge:", err);
  }
});

// Load all challenges
async function loadChallenges() {
  challengeList.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "challenges"));

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const li = document.createElement("li");
    li.innerHTML = `<strong>${data.title}</strong> - ${data.duration} days`;
    challengeList.appendChild(li);
  });
}

// Initialize
window.addEventListener("DOMContentLoaded", () => {
  loadChallenges();
});
