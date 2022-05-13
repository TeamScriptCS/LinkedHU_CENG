package com.hacettepe.LinkedHU_CENG.Controller;

import com.hacettepe.LinkedHU_CENG.Model.Academicians;
import com.hacettepe.LinkedHU_CENG.Model.Graduates;
import com.hacettepe.LinkedHU_CENG.Service.AcademicianService;
import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/academicians")
public class AcademiciansController {

    private final AcademicianService academicianService;

    public AcademiciansController(AcademicianService academicianService) {
        this.academicianService = academicianService;

    }
    @PostMapping("create")
    public ResponseEntity<Academicians> createAcademicians(@RequestBody Academicians academicians){

        Academicians resultAc=academicianService.createAcademicians(academicians);

        return ResponseEntity.ok(resultAc);
    }
    @GetMapping("/getAll")
    public ResponseEntity<List<Academicians>> getStudents(){
        List<Academicians>  all=academicianService.getAcademicians();
        return  ResponseEntity.ok(all);
    }
    @GetMapping("/getByID/{id_user}")
    public ResponseEntity<Academicians> getAcademician(int id){
        Academicians academicians=academicianService.getAcademician(id);



        return ResponseEntity.ok(academicians);
    }
}
