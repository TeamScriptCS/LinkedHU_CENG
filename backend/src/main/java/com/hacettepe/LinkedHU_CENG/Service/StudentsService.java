package com.hacettepe.LinkedHU_CENG.Service;

import com.hacettepe.LinkedHU_CENG.Model.Academicians;
import com.hacettepe.LinkedHU_CENG.Model.Students;

import java.util.List;

public interface StudentService {
    Students createStudent(Student student);
    List<Students> getStudents();
    Students getStudent(int id);
    Students deleteStudent(int id);
    Students updateStudent(int id, Student student);
}
