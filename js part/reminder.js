
const reminders = [
    { message: "Time to drink water! 💧", time: "09:00" },
    { message: "Stretch and move! 🏃‍♂️", time: "11:30" },
    { message: "Take a meditation break 🧘", time: "15:00" },
    { message: "Start winding down for sleep 🌙", time: "21:30" }
  ];
  
  // Check and show reminders every minute
  setInterval(() => {
    const now = new Date();
    const currentTime = now.toTimeString().slice(0, 5); // HH:MM
  
    reminders.forEach(reminder => {
      if (reminder.time === currentTime) {
        showReminder(reminder.message);
      }
    });
  }, 60000);
  
  // Show reminder alert (can be replaced with toast/notification)
  function showReminder(message) {
    alert(message);
    // Or use custom notification logic
    // displayToast(message);
  }
  
  // Optional: request browser notification permission
  if ("Notification" in window && Notification.permission !== "granted") {
    Notification.requestPermission();
  }
  