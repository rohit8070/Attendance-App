package com.attendance.myapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.attendance.myapp.models.Student;
import com.attendance.myapp.services.StudentService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {

	@Autowired
	StudentService studentService;

	@PostMapping("register-student")
	public String registerStudent(@RequestBody Student student, @RequestParam String courseName) {

//        // This is just for printing purposes
//        System.out.println(student);
//        System.out.println(courseName);

		Student savedStudent = studentService.saveStudent(student, courseName);
		System.out.println(savedStudent);
		if (savedStudent != null) {
			return "success";
		}
		return null;
	}
}