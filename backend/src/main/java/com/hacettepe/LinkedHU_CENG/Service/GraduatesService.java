package com.hacettepe.LinkedHU_CENG.Service;

import com.hacettepe.LinkedHU_CENG.Model.Academicians;
import com.hacettepe.LinkedHU_CENG.Model.Graduates;
import com.hacettepe.LinkedHU_CENG.Model.Students;

import java.util.List;

public interface GraduatesService {
    Graduates createGraduates(Graduates graduates );
    List<Graduates> getGraduates();
    Graduates getGraduate(int id);
}
