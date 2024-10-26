import React, { useState } from "react";
import "./ManageClasses.css";

const ManageClasses = () => {
  const [classes, setClasses] = useState([
    { id: 1, name: "Mathematics", students: 30 },
    { id: 2, name: "Science", students: 28 },
    { id: 3, name: "English", students: 35 },
    { id: 4, name: "History", students: 25 },
  ]);

  const handleEdit = (classId) => {
    alert(`Editing class with ID: ${classId}`);
  };

  const handleDelete = (classId) => {
    if (window.confirm("Are you sure you want to delete this class?")) {
      setClasses(classes.filter((cls) => cls.id !== classId));
    }
  };

  const handleAddClass = () => {
    const className = window.prompt("Enter the new class name:");
    const studentsCount = window.prompt("Enter the number of students:");
    if (className && studentsCount) {
      const newClass = {
        id: classes.length + 1,
        name: className,
        students: Number(studentsCount),
      };
      setClasses([...classes, newClass]);
    }
  };

  return (
    <div className="manage-classes-container">
      <header className="manage-classes-header">
        <h2>Your Classes</h2>
        <button className="add-class-btn" onClick={handleAddClass}>
          + Add Class
        </button>
      </header>

      <div className="classes-list">
        {classes.length > 0 ? (
          classes.map((cls) => (
            <div className="class-card" key={cls.id}>
              <div className="class-info">
                <h3>{cls.name}</h3>
                <p>Students: {cls.students}</p>
              </div>
              <div className="class-actions">
                <button className="edit-btn" onClick={() => handleEdit(cls.id)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(cls.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No classes to display</p>
        )}
      </div>
    </div>
  );
};

export default ManageClasses;
