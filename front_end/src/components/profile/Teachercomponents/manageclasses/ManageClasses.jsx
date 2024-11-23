import React, { useEffect, useState } from "react";
import axios from "axios";
import AddClass from "./AddClass"; // Import the AddClass component
import "./ManageClasses.css";

const ManageClasses = ({ loginData }) => {
  const [courses, setCourses] = useState([]); // Array of course names
  const [showForm, setShowForm] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (loginData && loginData.id) {
      const url = `http://localhost:8080/teacher/courses?id=${encodeURIComponent(
        loginData.id
      )}`;
      axios
        .get(url)
        .then((response) => {
          console.log("API Response:", response.data);
          // Transform response into an object with name and subjects
          const transformedCourses = response.data.map((item) => {
            const [courseName, subjectName] = item.split(",");
            return {
              name: courseName,
              subjects: [{ name: subjectName, totalStudents: 0 }], // Placeholder for totalStudents
            };
          });
          setCourses(transformedCourses);
        })
        .catch((error) => console.error("Error fetching courses:", error));
    }
  }, [loginData, refresh]);

  const handleAddClassClick = () => {
    setShowForm(true);
  };

  const handleAddClassSubmit = (newClass) => {
    if (loginData && loginData.id) {
      const url = `http://localhost:8080/teacher/addclass?id=${encodeURIComponent(
        loginData.id
      )}`;
      axios
        .post(url, newClass)
        .then((response) => {
          setShowForm(false);
          setRefresh((prev) => !prev); // Trigger re-fetch to update the courses list
        })
        .catch((error) => console.error("Error adding class:", error));
    }
  };

  return (
    <div className="manage-classes-container">
      <header className="manage-classes-header">
        <h2>Your Courses</h2>
        <button className="btn add-class-btn" onClick={handleAddClassClick}>
          + Add Course
        </button>
      </header>

      <div className="course-cards">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <h3 className="course-name">{course.name}</h3>
            <div className="subjects-list">
              {course.subjects && course.subjects.length > 0 ? (
                course.subjects.map((subject, idx) => (
                  <div className="subject-card" key={idx}>
                    <h4>{subject.name}</h4>
                    <p>Total Students: {subject.totalStudents}</p>
                  </div>
                ))
              ) : (
                <p>No subjects available</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <AddClass onSubmit={handleAddClassSubmit} /> // Pass the submit handler
      )}
    </div>
  );
};

export default ManageClasses;
