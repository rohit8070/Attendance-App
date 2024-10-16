import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [userType, setUserType] = useState("Student"); // Default to 'Student'

  const handleToggle = (type) => {
    setUserType(type);
  };

  return (
    <div className="register-container">
      <header className="register-header">
        <h1>Register for Attendance App</h1>
        <p>Create your account to manage and track attendance.</p>
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
        {userType === "Teacher" ? (
          <TeacherRegisterForm />
        ) : (
          <StudentRegisterForm />
        )}
      </div>
    </div>
  );
};

// Teacher Register Form Component
const TeacherRegisterForm = () => (
  <form className="register-form">
    <h2>Teacher Registration</h2>
    <input type="text" placeholder="Full Name" required />
    <input type="text" placeholder="Teacher ID" required />
    <input type="email" placeholder="Email" required />
    <input type="password" placeholder="Password" required />
    <input type="password" placeholder="Confirm Password" required />
    <button type="submit">Register</button>
    <p className="account-message">
      Already have an account? <a href="/login">Sign In</a>
    </p>
  </form>
);

// Student Register Form Component
const StudentRegisterForm = () => (
  <form className="register-form">
    <h2>Student Registration</h2>
    <input type="text" placeholder="Full Name" required />
    <input type="text" placeholder="Student ID" required />
    <input type="email" placeholder="Email" required />
    <input type="password" placeholder="Password" required />
    <input type="password" placeholder="Confirm Password" required />
    <button type="submit">Register</button>
    <p className="account-message">
      Already have an account? <a href="/login">Sign In</a>
    </p>
  </form>
);

export default Register;
