package com.attendance.myapp.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "course_allot")
public class CourseAllot {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "allotment_id") // New unique column name
	private Long allotmentId; // Renamed for clarity
	
	
	@Column(name = "course_id")
	private Long courseId; // Corrected variable name

	@Column(name = "id")
	private Long id; // teacherId

	@Column(name = "subject_id")
	private Long subjectId;

	public long getCourseId() { // Corrected method name
		return courseId;
	}

	public void setCourseId(long courseId) { // Corrected method name
		this.courseId = courseId;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getSubjectId() {
		return subjectId;
	}

	public void setSubjectId(long subjectId) {
		this.subjectId = subjectId;
	}

	@Override
	public String toString() {
		return "CourseAllot [courseId=" + courseId + ", id=" + id + ", subjectId=" + subjectId + "]";
	}
}
