function calculateCategoryScore(completedDays, totalDays) {
    return Math.min(100, Math.round((completedDays / totalDays) * 100));
  }
  
  function calculateWellnessScore(scores) {
    const sum = scores.reduce((a, b) => a + b, 0);
    return Math.round(sum / scores.length);
  }
  
  // Sample data from Firestore or app state
  const userHabits = {
    fitness: { completed: 6, total: 7 },
    sleep: { completed: 7, total: 7 },
    hydration: { completed: 5, total: 7 },
    mindfulness: { completed: 4, total: 7 }
  };
  
  const scores = [
    calculateCategoryScore(userHabits.fitness.completed, userHabits.fitness.total),
    calculateCategoryScore(userHabits.sleep.completed, userHabits.sleep.total),
    calculateCategoryScore(userHabits.hydration.completed, userHabits.hydration.total),
    calculateCategoryScore(userHabits.mindfulness.completed, userHabits.mindfulness.total),
  ];
  
  const wellnessScore = calculateWellnessScore(scores);
  console.log("Wellness Score:", wellnessScore); // e.g. 78
  