 // dashboard.js

// Dummy habit data - this could later come from Firebase
const habits = [
    {
      title: "Hydration",
      goal: "8 Glasses/Day",
      icon: "../assets/images/hydration.png",
    },
    {
      title: "Meditation",
      goal: "10 Minutes/Day",
      icon: "../assets/images/meditation.png",
    },
    {
      title: "Workout",
      goal: "3 Times/Week",
      icon: "../assets/images/workout.png",
    },
    {
      title: "Sleep",
      goal: "7-8 Hours/Night",
      icon: "../assets/images/sleep.png",
    },
  ];
  
  // Load habits on page load
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".habit-summary") || document.body;
  
    habits.forEach((habit) => {
      const card = document.createElement("div");
      card.className = "habit-card";
  
      card.innerHTML = `
        <img src="${habit.icon}" alt="${habit.title}" />
        <h3>${habit.title}</h3>
        <p>${habit.goal}</p>
        <button class="mark-complete">Mark as Done</button>
      `;
  
      container.appendChild(card);
    });

    document.getElementById("toggleDarkMode").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
      
        // Optionally store mode in localStorage
        const isDark = document.body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDark);
      });
      
      // On page load, apply stored mode
      window.addEventListener("DOMContentLoaded", () => {
        const savedMode = localStorage.getItem("darkMode");
        if (savedMode === "true") {
          document.body.classList.add("dark-mode");
        }
      });
      
    // Optional: handle click events
    container.addEventListener("click", (e) => {
      if (e.target.classList.contains("mark-complete")) {
        e.target.textContent = "Completed ✅";
        e.target.disabled = true;
        e.target.style.backgroundColor = "#6c757d";
      }
    });
  });