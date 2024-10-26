package com.attendance.myapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.attendance.myapp.models.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
	Course findByCourseName(String course_name);
}
