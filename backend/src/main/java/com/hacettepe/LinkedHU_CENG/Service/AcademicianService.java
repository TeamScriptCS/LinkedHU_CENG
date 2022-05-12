package com.hacettepe.LinkedHU_CENG.Service;

import com.hacettepe.LinkedHU_CENG.Model.Academicians;
import com.hacettepe.LinkedHU_CENG.Model.Students;

import java.util.List;

public interface AcademicianService {
 Academicians createAcademicians(Academicians academicians);
 List<Academicians> getAcademicians();
 Academicians getAcademician(int id);
}
