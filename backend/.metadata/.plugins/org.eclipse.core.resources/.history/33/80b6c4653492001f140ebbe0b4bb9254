package com.attendance.myapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.attendance.myapp.models.Course;
import com.attendance.myapp.models.Student;
import com.attendance.myapp.repositories.CourseRepository;
import com.attendance.myapp.repositories.StudentRepository;

@Service
public class StudentService {
	
	@Autowired
	StudentRepository studentRepository;
	
	@Autowired
	CourseRepository courseRepository;
	
	public Student saveStudent(Student student, String courseName) {
		Course course = courseRepository.findByCourseName(courseName);
		student.setCourse_id(course.getCourse_id());
		return studentRepository.save(student);
	}
}
