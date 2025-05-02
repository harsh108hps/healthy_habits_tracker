 // habits.js

// Function to create and return a habit card DOM element
function createHabitCard(habit) {
    const card = document.createElement("div");
    card.className = "habit-card";
  
    card.innerHTML = `
      <img src="${habit.icon}" alt="${habit.title}" />
      <h3>${habit.title}</h3>
      <p>Goal: ${habit.goal}</p>
      <button class="mark-complete">Mark as Done</button>
    `;
  
    return card;
  }
  
  // Function to render habits in a container
  function renderHabits(habits, containerSelector) {
    const container = document.querySelector(containerSelector);
    container.innerHTML = "";
  
    habits.forEach(habit => {
      const card = createHabitCard(habit);
      container.appendChild(card);
    });
  
    container.addEventListener("click", (e) => {
      if (e.target.classList.contains("mark-complete")) {
        e.target.textContent = "Completed ✅";
        e.target.disabled = true;
        e.target.style.backgroundColor = "#6c757d";
      }
    });
  }
  
  // Example usage
  const defaultHabits = [
    { title: "Hydration", goal: "8 Glasses/Day", icon: "../assets/images/water-glass.png" },
    { title: "Meditation", goal: "10 Minutes/Day", icon: "../assets/images/meditation.png" },
    { title: "Workout", goal: "3 Times/Week", icon: "../assets/images/workout.png" },
    { title: "Sleep", goal: "7-8 Hours/Night", icon: "../assets/images/sleep.png" }
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    renderHabits(defaultHabits, ".habit-summary");
  });