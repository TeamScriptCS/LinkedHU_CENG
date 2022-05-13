package com.hacettepe.LinkedHU_CENG.Service.impl;

import com.hacettepe.LinkedHU_CENG.Model.Graduates;
import com.hacettepe.LinkedHU_CENG.Model.Students;
import com.hacettepe.LinkedHU_CENG.Repository.GraduatesRepository;

import com.hacettepe.LinkedHU_CENG.Service.GraduatesService;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class GraduatesServiceImpl implements GraduatesService {


        private final GraduatesRepository graduatesRepository;

        public GraduatesServiceImpl(GraduatesRepository graduatesRepository) {
            this.graduatesRepository = graduatesRepository;
        }


        @Override
        public Graduates createGraduates(Graduates graduates) {
            System.out.println("AFFFAAA");
            graduates.setCreateDate(new Date());
            graduates.setCreatedBy("Admin");
            return graduatesRepository.save(graduates);

        }

    @Override
    public List<Graduates> getGraduates() {
        return graduatesRepository.findAll();
    }

    @Override
    public Graduates getGraduate(int id) {
        Optional<Graduates> g=graduatesRepository.findById(id);
        if(g.isPresent()){
            return g.get();
        }
            return null;
    }
}

