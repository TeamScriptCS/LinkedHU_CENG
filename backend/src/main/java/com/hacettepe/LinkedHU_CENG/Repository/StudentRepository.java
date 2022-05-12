package com.hacettepe.LinkedHU_CENG.Repository;


import com.hacettepe.LinkedHU_CENG.Model.Students;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student,Integer> {

    Student findByEmail(String email);
    Student findByEmailAndPassword(String email,String password);
    Student findById(int id);

    void save(Student student);
    void deleteById(int id);
    void update(Student student);
}
