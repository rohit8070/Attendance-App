package com.attendance.myapp.controllers;

import org.springframework.web.bind.annotation.RestController;
import com.attendance.myapp.models.Teacher;
import com.attendance.myapp.services.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class TeacherController {

	@Autowired
	TeacherService teacherService;

	@PostMapping("/register")
	public String teahcerRegister(@RequestBody Teacher teacher) {
		Teacher registeredteacher = teacherService.saveTeacher(teacher);
		System.out.println(teacher);
		return "register success";
	}

	@PostMapping("/login")
	public Teacher teacherLogin(@RequestBody Teacher loginDetails) {

		Teacher teacher = teacherService.findByEmailIdAndpassword(loginDetails.getEmail(), loginDetails.getPassword());
		
		if(teacher != null) {
			teacher.setPassword(null);
			return teacher;
		}
		return null;
	}
}
