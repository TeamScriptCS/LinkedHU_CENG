package com.hacettepe.LinkedHU_CENG.Controller;


import com.hacettepe.LinkedHU_CENG.Model.Academicians;
import com.hacettepe.LinkedHU_CENG.Model.Student;
import com.hacettepe.LinkedHU_CENG.Service.AcademicianService;
import com.hacettepe.LinkedHU_CENG.Service.StudentService;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

    private final StudentsService studentService;

    public StudentController(StudentsService studentService) {
        this.studentService = studentService;

    }
    @PostMapping("/create")
    public ResponseEntity<Students> createStudent(@RequestBody Student students){
        Students resultAc=studentsService.createStudents(students);

        return ResponseEntity.ok(resultAc);
    }
    @GetMapping("/all")
    public ResponseEntity<List<Students>> getStudents(){
        List<Students> all=studentsService.getStudents();
        return  ResponseEntity.ok(all);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Students> getStudent(int id){
        Students students = studentsService.getStudent(id);
        return ResponseEntity.ok(students);
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Students> deleteStudent(int id){
        Students students=studentsService.deleteStudent(id);
        return ResponseEntity.ok(students);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Students> updateStudent(int id,@RequestBody Student students){
        Students resultAc=studentsService.updateStudent(id,students);
        return ResponseEntity.ok(resultAc);
    }
}
