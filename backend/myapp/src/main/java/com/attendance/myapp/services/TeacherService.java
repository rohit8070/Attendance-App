package com.attendance.myapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.attendance.myapp.models.Teacher;
import com.attendance.myapp.repositories.TeacherRepository;

@Service
public class TeacherService {

    @Autowired
    private TeacherRepository teacherRepository;
    
    public TeacherService(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
    }
    
    public Teacher saveTeacher(Teacher teacher) {
        return teacherRepository.save(teacher);
    }
 

	public Teacher findByEmailIdAndpassword(String email, String password) {
		// TODO Auto-generated method stub
		return teacherRepository.findByEmailAndPassword(email, password);
	}
}
