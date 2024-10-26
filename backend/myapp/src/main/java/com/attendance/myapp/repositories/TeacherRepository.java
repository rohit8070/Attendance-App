package com.attendance.myapp.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import com.attendance.myapp.models.Teacher;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {

	Teacher findByEmailAndPassword(String email, String password);

	
}