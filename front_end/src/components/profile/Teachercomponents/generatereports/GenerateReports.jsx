import React, { useState } from "react";
import "./GenerateReports.css";

const GenerateReports = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [startDate, setStartDate] = useState(new Date().toISOString().substring(0, 10));
  const [endDate, setEndDate] = useState(new Date().toISOString().substring(0, 10));
  const [reportType, setReportType] = useState("summary");

  const subjects = ["Mathematics", "Science", "History"];
  
  const handleGenerateReport = () => {
    // Logic to generate report
    alert(`Generating ${reportType} report for ${selectedSubject} from ${startDate} to ${endDate}`);
  };

  return (
    <div className="generate-reports-container">
      <h2>Generate Attendance Reports</h2>
      <div className="report-filters">
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
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <label htmlFor="end-date">End Date:</label>
          <input
            type="date"
            id="end-date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <label htmlFor="report-type">Report Type:</label>
          <select
            id="report-type"
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
          >
            <option value="summary">Summary</option>
            <option value="detailed">Detailed</option>
          </select>
        </div>
      </div>

      <button className="generate-button" onClick={handleGenerateReport}>
        Generate Report
      </button>
    </div>
  );
};

export default GenerateReports;
