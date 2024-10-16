import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [userType, setUserType] = useState("Student"); // Default to 'Student'

  const handleToggle = (type) => {
    setUserType(type);
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Attendance App</h1>
        <p>Effortlessly manage and track attendance in one place.</p>
      </header>

      {/* Toggle Button for User Type */}
      <div className="toggle-container">
        <button
          className={`toggle-btn ${userType === "Teacher" ? "active" : ""}`}
          onClick={() => handleToggle("Teacher")}
        >
          Teacher
        </button>
        <button
          className={`toggle-btn ${userType === "Student" ? "active" : ""}`}
          onClick={() => handleToggle("Student")}
        >
          Student
        </button>
      </div>

      {/* Conditional Form Rendering */}
      <div className="form-container">
        {userType === "Teacher" ? <TeacherLoginForm /> : <StudentLoginForm />}
      </div>
    </div>
  );
};

// Teacher Login Form Component
const TeacherLoginForm = () => (
  <form className="login-form">
    <h2>Teacher Login</h2>
    <input type="text" placeholder="Teacher ID" required />
    <input type="email" placeholder="Email" required />
    <input type="password" placeholder="Password" required />
    <button type="submit">Login</button>
    <p className="account-message">
      Already have an account? <a href="#signin">Sign In</a>
    </p>
  </form>
);

// Student Login Form Component
const StudentLoginForm = () => (
  <form className="login-form">
    <h2>Student Login</h2>
    <input type="text" placeholder="Student ID" required />
    <input type="email" placeholder="Email" required />
    <input type="password" placeholder="Password" required />
    <button type="submit">Login</button>
    <p className="account-message">
      Already have an account? <a href="#signin">Sign In</a>
    </p>
  </form>
);

export default Home;
