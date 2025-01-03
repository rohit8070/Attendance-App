package com.attendance.myapp.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.attendance.myapp.models.Course;
import com.attendance.myapp.models.CourseAllot;
import com.attendance.myapp.models.Subjects;
import com.attendance.myapp.repositories.CourseRepository;
import com.attendance.myapp.repositories.SubjectRepository;
import com.attendance.myapp.services.ClassService;

@RestController
@CrossOrigin(origins = { "http://localhost:5173", // Local frontend URL
		"https://s7rl96t9-5173.inc1.devtunnels.ms/", // Tunnel URL
		"http://192.168.41.48:5173" // Local IP-based URL for frontend
})
public class ClassController {

	@Autowired
	private ClassService classService;

	@Autowired
	private CourseRepository courseRepository;

	@Autowired
	private SubjectRepository subjectRepository;

	@PostMapping("/teacher/addclass")
	public ResponseEntity<String> addClass(@RequestBody Map<String, String> requestData, @RequestParam int id) {
		String courseName = requestData.get("course");
		String subjectName = requestData.get("subject");

		Course course = courseRepository.findByCourseName(courseName);
		Subjects subjects = subjectRepository.findBySubjectName(subjectName);

		System.out.println(course);
		System.out.println(subjects);

		if (course == null || subjects == null) {
			return ResponseEntity.badRequest().body("Course or Subject not found");
		}
		CourseAllot courseAllot = new CourseAllot();
		courseAllot.setCourseId(course.getCourse_id());
		courseAllot.setSubjectId(subjects.getSubjectId());
		courseAllot.setId(id);
		System.out.println(courseAllot);
		classService.save(courseAllot);

		return ResponseEntity.ok("Class added successfully");
	}
}
