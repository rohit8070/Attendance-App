import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [userType, setUserType] = useState("Student");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleToggle = (type) => {
    setUserType(type);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="register-container">
      <header className="register-header">
        <h1>Register for Attendance App</h1>
        <p>Create your account to manage and track attendance.</p>
      </header>

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

      <div className="form-container">
        {userType === "Teacher" ? (
          <TeacherRegisterForm
            handleImageChange={handleImageChange}
            selectedImage={selectedImage}
          />
        ) : (
          <StudentRegisterForm
            handleImageChange={handleImageChange}
            selectedImage={selectedImage}
          />
        )}
      </div>
    </div>
  );
};

// Teacher Register Form Component
const TeacherRegisterForm = ({ handleImageChange, selectedImage }) => (
  <form className="register-form">
    <h2>Teacher Registration</h2>
    <input type="text" placeholder="Full Name" required />
    <input type="text" placeholder="Teacher ID" required />
    <input type="email" placeholder="Email" required />
    <input type="password" placeholder="Password" required />
    <input type="password" placeholder="Confirm Password" required />

    {/* Image Upload */}
    <div className="image-upload">
      <label htmlFor="teacherImage" className="upload-label">
        Upload Image
      </label>
      <input
        type="file"
        id="teacherImage"
        accept="image/*"
        onChange={handleImageChange}
      />
      {selectedImage && (
        <img
          src={selectedImage}
          alt="Profile Preview"
          className="image-preview"
        />
      )}
    </div>

    <button type="submit">Register</button>
    <p className="account-message">
      Already have an account? <a href="/login">Sign In</a>
    </p>
  </form>
);

// Student Register Form Component
const StudentRegisterForm = ({ handleImageChange, selectedImage }) => (
  <form className="register-form">
    <h2>Student Registration</h2>
    <input type="text" placeholder="Full Name" required />
    <input type="text" placeholder="Student ID" required />
    <input type="email" placeholder="Email" required />
    <input type="password" placeholder="Password" required />
    <input type="password" placeholder="Confirm Password" required />
    {/* Image Upload */}
    <div className="image-upload">
      <label htmlFor="studentImage" className="upload-label">
        Upload Image
      </label>
      <input
        type="file"
        id="studentImage"
        accept="image/*"
        onChange={handleImageChange}
      />
      {selectedImage && (
        <img
          src={selectedImage}
          alt="Profile Preview"
          className="image-preview"
        />
      )}
    </div>

    <button type="submit">Register</button>
    <p className="account-message">
      Already have an account? <a href="/login">Sign In</a>
    </p>
  </form>
);

export default Register;

