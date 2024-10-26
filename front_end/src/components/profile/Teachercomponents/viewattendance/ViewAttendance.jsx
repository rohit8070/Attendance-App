import React, { useState } from "react";
import "./ViewAttendance.css";

const ViewAttendance = () => {
  const [startDate, setStartDate] = useState(new Date().toISOString().substring(0, 10));
  const [endDate, setEndDate] = useState(new Date().toISOString().substring(0, 10));
  const [selectedSubject, setSelectedSubject] = useState("");

  // Dummy data for demonstration
  const subjects = ["Mathematics", "Science", "History"];
  const attendanceRecords = [
    { student: "John Doe", status: "Present" },
    { student: "Jane Smith", status: "Absent" },
    { student: "Emily Johnson", status: "Present" },
  ];

  const totalStudents = attendanceRecords.length;
  const totalPresent = attendanceRecords.filter(record => record.status === "Present").length;
  const totalAbsent = attendanceRecords.filter(record => record.status === "Absent").length;

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  return (
    <div className="attendance-container">
      <h2>View Attendance</h2>
      <div className="attendance-filters">
        <div className="filter-group">
          <label htmlFor="subject-select">Subject:</label>
          <select
            id="subject-select"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="">Select a subject</option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="start-date">Start Date:</label>
          <input
            type="date"
            id="start-date"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>

        <div className="filter-group">
          <label htmlFor="end-date">End Date:</label>
          <input
            type="date"
            id="end-date"
            value={endDate}
            onChange={handleEndDateChange}
          />
        </div>
      </div>

      <div className="attendance-summary">
        <h3>Total Students: {totalStudents}</h3>
        <h3>Total Present: {totalPresent}</h3>
        <h3>Total Absent: {totalAbsent}</h3>
      </div>

      <table className="attendance-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.map((record, index) => (
            <tr key={index}>
              <td>{record.student}</td>
              <td>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAttendance;
