import React, { useState } from "react";
import TeacherRegisterForm from "../forms/TeacherRegisterForm";
import StudentRegisterForm from "../forms/StudentRegisterForm";
import axios from "axios"; // Added axios import
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userType, setUserType] = useState("Student");
  const [responseMessage, setResponseMessage] = useState(""); // Added responseMessage state
  const navigate = useNavigate();
  const [teacher, setTeacher] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [student, setStudent] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNo: "",
    address: "",
    courseName: "",
    semester: "",
  });

  const valueHandler = (e) => {
    const { name, value } = e.target;
    setTeacher({
      ...teacher,
      [name]: value,
    });
  };

  const valueHandler2 = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleToggle = (type) => {
    setUserType(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log(teacher);
    axios
      .post("http://localhost:8080/register", teacher) // Send front variable to the backend
      .then((response) => {
        setResponseMessage(response.data); // Update response message with the backend response
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
        setResponseMessage("Error sending data"); // Handle error
      });

    navigate("/login");
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    console.log(student);
    // Construct the URL with the actual courseName value
    const url = `http://localhost:8080/register-student?courseName=${encodeURIComponent(
      student.courseName
    )}`;
    axios
      .post(url, student) // Add axios request for student data
      .then((response) => {
        setResponseMessage(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
        setResponseMessage("Error sending data");
      });

    navigate("/login");
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
            teacher={teacher}
            valueHandler={valueHandler}
            handleSubmit={handleSubmit}
          />
        ) : (
          <StudentRegisterForm
            student={student} // Pass the student object as well
            valueHandler2={valueHandler2}
            handleSubmit2={handleSubmit2} // Corrected to handleSubmit2
          />
        )}
      </div>
    </div>
  );
};

export default Register;
