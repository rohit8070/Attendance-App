package com.attendance.myapp.controllers;

import java.time.LocalDate;
import java.sql.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.attendance.myapp.models.Attendance;
import com.attendance.myapp.models.Course;
import com.attendance.myapp.models.StudentAttendanceDTO;
import com.attendance.myapp.models.Subjects;
import com.attendance.myapp.models.Teacher;
import com.attendance.myapp.repositories.CourseRepository;
import com.attendance.myapp.repositories.SubjectRepository;
import com.attendance.myapp.services.AttendanceService;
import com.attendance.myapp.services.TeacherService;

@RestController
@CrossOrigin(origins = { "http://localhost:5173", // Local frontend URL
		"https://s7rl96t9-5173.inc1.devtunnels.ms/", // Tunnel URL
		"http://192.168.41.48:5173" // Local IP-based URL for frontend
})
public class TeacherController {

	@Autowired
	TeacherService teacherService;
	@Autowired
	private AttendanceService attendanceService;
	@Autowired
	CourseRepository courseRepository;
	@Autowired
	SubjectRepository subjectRepository;

	@PostMapping("/register")
	public String teacherRegister(@RequestBody Teacher teacher) {
		Teacher registeredTeacher = teacherService.saveTeacher(teacher);
		return "register success";
	}

	@PostMapping("/login")
	public Teacher teacherLogin(@RequestBody Teacher loginDetails) {
		Teacher teacher = teacherService.findByEmailIdAndpassword(loginDetails.getEmail(), loginDetails.getPassword());
		if (teacher != null) {
			teacher.setPassword(null); // Ensure password is not returned
			return teacher;
		}
		return null;
	}

	@GetMapping("/teacher/courses")
	public List<String> getCourses(@RequestParam int id) {
		List<String> courses = teacherService.fetchCourses(id);
		return courses;
	}

	@GetMapping("/getallcourses")
	public List<String> getAllCourses() {
		List<String> allCourses = teacherService.getAllCourses();
		return allCourses;
	}

	@GetMapping("/getsubjects")
	public List<String> getSubjectsByCourseAndSemester(@RequestParam String course, @RequestParam int semester) {
		List<String> subjects = teacherService.getSubjectsByCourseAndSemester(course, semester);
		return subjects;
	}

	@GetMapping("/teacher/getsubjects")
	public List<String> getSubjectsByCourseAndTeacherId(@RequestParam String course, @RequestParam int id) {
		Course courses = courseRepository.findByCourseName(course);
		List<String> subjects = teacherService.getSubjectsByCourseIdAndId(courses.getCourse_id(), id);
		return subjects;
	}

	// Attendance End points
	@GetMapping("/teacher/todayAttendance")
	public List<Attendance> getTodayAttendance(@RequestParam String course, @RequestParam String subject) {
		Course courses = courseRepository.findByCourseName(course);
		Subjects subjects = subjectRepository.findBySubjectName(subject);

		List<Attendance> attendance = attendanceService.getTodayAttendance(courses.getCourse_id(),
				subjects.getSubjectId(), Date.valueOf(LocalDate.now()));
		System.out.println(attendance);
		return attendance;
	}

	@PostMapping("/teacher/updateAttendance")
	public String updateAttendance(@RequestBody Map<String, Object> requestData) {
		System.out.println(requestData.get("course"));
		String courseName = (String) requestData.get("course");
		String subjectName = (String) requestData.get("subject");

		Course course = courseRepository.findByCourseName(courseName);
		Subjects subject = subjectRepository.findBySubjectName(subjectName);
		System.out.println(course.getCourse_id());
		System.out.println(subject.getSubjectId());

		// Casting the attendance map
		Map<String, Boolean> attendanceMap = (Map<String, Boolean>) requestData.get("attendance");

		List<Attendance> attendanceList = attendanceMap.entrySet().stream().map(entry -> {
			Attendance attendance = new Attendance();
			try {
				Long studentId = Long.parseLong(entry.getKey());
				attendance.setStudentId(studentId);
			} catch (NumberFormatException e) {
				System.out.println("Invalid student ID format: " + entry.getKey());
				return null;
			}
			attendance.setCourseId(course.getCourse_id()); // Set the correct course_id
			attendance.setSubjectId(subject.getSubjectId()); // Correctly set the subject_id
			attendance.setId((Integer) requestData.get("teacherId"));
			attendance.setAttendanceDate(Date.valueOf(LocalDate.now()));
			attendance.setStatus(entry.getValue() ? "Present" : "Absent");
			return attendance;
		}).filter(attendance -> attendance != null).collect(Collectors.toList());

		return attendanceService.saveAttendance(attendanceList);
	}

	@GetMapping("/teacher/generateReport")
	public List<StudentAttendanceDTO> getAttendanceReport(@RequestParam String course, @RequestParam String subject,
			@RequestParam int teacherid, @RequestParam Date startDate, @RequestParam Date endDate) {
		long courseId = courseRepository.findByCourseName(course).getCourse_id();
		long subjectId = subjectRepository.findBySubjectName(subject).getSubjectId();

		System.out.println(attendanceService.getAttendanceReport(courseId, subjectId, teacherid, startDate, endDate));
		return attendanceService.getAttendanceReport(courseId, subjectId, teacherid, startDate, endDate);
	}

}
