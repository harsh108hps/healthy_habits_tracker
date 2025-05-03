 # 🏃‍♂️ Healthy Fitness Tracker

The **Healthy Fitness Tracker** is a web-based application designed to help users build and maintain healthy habits. Whether it’s drinking enough water, exercising, sleeping well, or practicing mindfulness, this app keeps users on track with interactive features and real-time progress tracking.

---

## 🚀 Live Demo

👉 [Click here to view the live site](https://singular-begonia-ab6fcc.netlify.app/)  


---

## 📌 Features

### ✅ 1. **Daily Habit Tracking**
- Users can track various habits like:
  - Water intake
  - Exercise
  - Sleep
  - Mindfulness
- Checkboxes or toggles let users mark habits as completed each day.

### 📊 2. **Habit Analytics Dashboard**
- Visual feedback through charts and progress bars.
- Shows how consistently a user has completed their habits.
- Helps users identify areas to improve.

### 💯 3. **Wellness Score System**
- Automatically calculates a "Wellness Score" based on completed habits.
- Provides daily feedback and motivation.

### 📅 4. **Calendar View**
- Allows users to review their habit history on a calendar.
- Highlights completed and missed days for each habit.

### 🔔 5. **Reminder Alerts**
- (Optional) Users can receive popup or on-screen reminders to complete their habits.

### 🌙 6. **Light/Dark Mode Toggle**
- Provides a user-friendly experience with theme switching.

### 🔐 7. **Authentication**
- Users can sign up and log in securely using Firebase Authentication.
- Ensures personal data and progress are saved.



## 🛠️ Technologies Used

### 🔧 Frontend:
- **HTML5** – Structure of the web pages.
- **CSS3** – Styling and responsive layout.
- **JavaScript (Vanilla JS)** – Application logic and interactivity.

### 🔥 Backend & Database:
- **Firebase Authentication** – Handles secure user login and signup.
- **Firebase Firestore** – Stores user data and habit logs in the cloud.

---

## 📁 Folder Structure

HealthyHabits_Tracker/
│
├── 📁 assets/
│   ├── 📁 images/               # App images (icons, illustrations)
│   └── 📁 fonts/                # Custom fonts if used
│
├── 📁 css/
│   └── style.css               # Main stylesheet
│
├── 📁 js/
│   ├── auth.js                 # Firebase authentication logic (login/signup/logout)
│   ├── habits.js               # Habit tracking logic (create, log, update)
│   ├── dashboard.js            # Dashboard logic (charts, wellness score, summaries)
│   ├── reminders.js            # Notification/reminder logic
│   └── firebase-config.js      # Firebase config & initialization
│
├── 📁 pages/
│   ├── login.html              # Login page
│   ├── signup.html             # Signup/register page
│   ├── dashboard.html          # Main app page after login
│   └── habit-creation.html     # Optional: Separate habit creation page
│
├── 📁 components/              # Optional - reusable HTML snippets or JS modules
│   ├── navbar.html             # Navigation bar
│   └── habitCard.html          # Template for habit cards
│
├── index.html                  # Landing page (intro/about or login redirect)
├── manifest.json               # (Optional) For PWA setup
├── README.md                   # Project overview and setup guide
└── 📄 .gitignore                # Ignore node_modules, etc. if using git


---

## 📸 Screenshots

*
## ✍️ Author

**Harsh Pratap Singh**  
- Email: harshpratapsingh39900@gmail.com
- GitHub:  
- Portfolio:

---

## 📌 License

This project is open source and available under the [MIT License](LICENSE).

---

