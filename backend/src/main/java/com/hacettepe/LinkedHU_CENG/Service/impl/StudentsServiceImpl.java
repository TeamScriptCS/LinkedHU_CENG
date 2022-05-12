package com.hacettepe.LinkedHU_CENG.Service.impl;

import com.hacettepe.LinkedHU_CENG.Model.Academicians;
import com.hacettepe.LinkedHU_CENG.Model.student;
import com.hacettepe.LinkedHU_CENG.Repository.AcademiciansRepository;
import com.hacettepe.LinkedHU_CENG.Repository.studentRepository;
import com.hacettepe.LinkedHU_CENG.Service.AcademicianService;
import com.hacettepe.LinkedHU_CENG.Service.studentService;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements studentervice {
    private final studentRepository studentRepository;

    public StudentServiceImpl(studentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }


    @Override
    public student createStudent(Student student) {
        
        student.setCreateDate(new Date());
        student.setCreatedBy("Admin");
        return studentRepository.save(student);

    }

    @Override
    public List<student> getStudents() {
        return studentRepository.findAll();
    }

    @Override
    public student getStudent(int id) {
        Optional<student> student = studentRepository.findById(id);
        return student.get();
    }

    @Override
    public student deleteStudent(int id) {
        Optional<student> s=studentRepository.findById(id);
        if(s.isPresent()){
            studentRepository.deleteById(id);
            return s.get();
        }
        return null;
    }


    @Override
    public student updateStudent(int id, Student student) {
        Optional<student> s=studentRepository.findById(id);
        if(s.isPresent()){
            student.setId(id);
            studentRepository.save(student);
            return s.get();
        }
        return null;
    }
}