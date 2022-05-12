package com.hacettepe.LinkedHU_CENG.Service.impl;

import com.hacettepe.LinkedHU_CENG.Model.Academicians;
import com.hacettepe.LinkedHU_CENG.Model.Students;
import com.hacettepe.LinkedHU_CENG.Repository.AcademiciansRepository;
import com.hacettepe.LinkedHU_CENG.Service.AcademicianService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class AcademicianServiceImpl implements AcademicianService {
  private final AcademiciansRepository academiciansRepository;

    public AcademicianServiceImpl(AcademiciansRepository academiciansRepository) {
        this.academiciansRepository = academiciansRepository;
    }

    @Override
    public Academicians createAcademicians(Academicians academicians) {

        academicians.setCreateDate(new Date());
academicians.setCreatedBy("Admin");
        return academiciansRepository.save(academicians);
    }

    @Override
    public List<Academicians> getAcademicians() {
        return academiciansRepository.findAll();
    }

    @Override
    public Academicians getAcademician(int id) {
        Optional<Academicians> a=academiciansRepository.findById(id);
        if(a.isPresent()){
            return a.get();
        }
        return null;
    }

}

