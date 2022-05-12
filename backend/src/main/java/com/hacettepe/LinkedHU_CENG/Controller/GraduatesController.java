package com.hacettepe.LinkedHU_CENG.Controller;

import com.hacettepe.LinkedHU_CENG.Model.Academicians;
import com.hacettepe.LinkedHU_CENG.Model.Graduates;
import com.hacettepe.LinkedHU_CENG.Model.Students;
import com.hacettepe.LinkedHU_CENG.Service.AcademicianService;
import com.hacettepe.LinkedHU_CENG.Service.GraduatesService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/graduates")
public class GraduatesController {

    private final GraduatesService graduatesService;

    public GraduatesController(GraduatesService graduatesService) {
        this.graduatesService = graduatesService;

    }
    @PostMapping("create")
    public ResponseEntity<Graduates> createAcademicians(@RequestBody Graduates graduates){
       
        Graduates resultAc=graduatesService.createGraduates(graduates);

        return ResponseEntity.ok(resultAc);
    }
    @GetMapping("/getAll")
    public ResponseEntity<List<Graduates>> getStudents(){
        List<Graduates>  all=graduatesService.getGraduates();
        return  ResponseEntity.ok(all);
    }
    @GetMapping("/getByID/{id_user}")
    public ResponseEntity<Graduates> getGraduate(int id){
        Graduates graduate=graduatesService.getGraduate(id);



        return ResponseEntity.ok(graduate);
    }
}