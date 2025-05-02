document.addEventListener('DOMContentLoaded', function() {
    // Dummy data (replace with data from Firebase or localStorage)
    const habits = [
      { name: "Morning Workout", category: "fitness", completed: 5 },
      { name: "Drink Water", category: "hydration", completed: 7 },
      { name: "Sleep Well", category: "sleep", completed: 4 },
      { name: "Meditation", category: "mindfulness", completed: 6 },
    ];
  
    // Analytics Calculation
    function getAnalyticsData(habits) {
      const totalHabits = habits.length;
      const completedHabits = habits.reduce((acc, habit) => acc + habit.completed, 0);
      const completionRate = Math.round((completedHabits / (totalHabits * 7)) * 100); // Assuming 7 days in a week
  
      const bestHabit = habits.sort((a, b) => b.completed - a.completed)[0].name;
      const worstHabit = habits.sort((a, b) => a.completed - b.completed)[0].name;
  
      return {
        totalHabits,
        completionRate,
        bestHabit,
        worstHabit,
      };
    }
  
    const analytics = getAnalyticsData(habits);
  
    // Display the analytics
    document.getElementById("totalHabits").textContent = analytics.totalHabits;
    document.getElementById("completionRate").textContent = `${analytics.completionRate}%`;
    document.getElementById("bestHabit").textContent = analytics.bestHabit;
    document.getElementById("worstHabit").textContent = analytics.worstHabit;
  
    // Habit Completion Trends Chart
    const ctx = document.getElementById('habitChart').getContext('2d');
    const habitChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], // Weeks
        datasets: [{
          label: 'Habit Completion Over Time',
          data: [3, 4, 5, 6], // Example: Week-wise completion data
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: false,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          }
        }
      }
    });
  });
  