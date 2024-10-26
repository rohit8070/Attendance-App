package com.attendance.myapp.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import com.attendance.myapp.models.Student;


public interface StudentRepository extends JpaRepository<Student, Long>{
	Student findByEmailAndPassword(String email, String password);
}