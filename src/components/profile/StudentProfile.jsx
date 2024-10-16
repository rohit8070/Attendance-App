import React from "react";
import "./StudentProfile.css";

const StudentProfile = () => {
  // Sample student data for demonstration
  const student = {
    name: "John Doe",
    rollNumber: "12345",
    email: "john.doe@example.com",
    course: "Computer Science",
    year: "2nd Year",
    attendance: "95%",
    profilePic: "https://via.placeholder.com/150", // Replace with actual image URL
    performance: [
      { subject: "Math", score: 90 },
      { subject: "Physics", score: 88 },
      { subject: "Chemistry", score: 92 },
    ],
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <img src={student.profilePic} alt="Profile" className="profile-pic" />
        <h2>{student.name}</h2>
        <p className="profile-subtext">
          {student.course} - {student.year}
        </p>
        <div className="badge">Active Student</div>
      </header>

      <div className="profile-info">
        <div className="info-section">
          <h3>Student Details</h3>
          <p>
            <strong>Roll Number:</strong> {student.rollNumber}
          </p>
          <p>
            <strong>Email:</strong> {student.email}
          </p>
          <p>
            <strong>Overall Attendance:</strong>
            <span
              className={`attendance ${
                student.attendance >= "75%" ? "good" : "poor"
              }`}
            >
              {student.attendance}
            </span>
          </p>
        </div>

        <div className="info-section">
          <h3>Performance Summary</h3>
          <div className="performance-chart">
            {student.performance.map((subject, index) => (
              <div key={index} className="subject-bar">
                <p className="subject-name">{subject.subject}</p>
                <div
                //   className="score-bar"
                //   style={{ width: `${subject.score}%` }}
                >
                  {subject.score}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="profile-footer">
        <button className="update-btn">Update Profile</button>
        <button className="logout-btn">Logout</button>
      </footer>
    </div>
  );
};

export default StudentProfile;
