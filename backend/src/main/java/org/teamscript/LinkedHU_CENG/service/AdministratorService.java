package org.teamscript.LinkedHU_CENG.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.teamscript.LinkedHU_CENG.model.Administrator;
import org.teamscript.LinkedHU_CENG.repository.AdministratorRepository;

import java.util.Optional;

@Service
public class AdministratorService {

//    @Autowired
    private final AdministratorRepository administratorRepository;

    public AdministratorService(AdministratorRepository administratorRepository) {
        this.administratorRepository = administratorRepository;
    }


    public boolean login(String username, String password) {

        Optional<Administrator> optionalAdministrator = administratorRepository.findByName(username);
        return optionalAdministrator.isPresent() && optionalAdministrator.get().getPassword().equals(password);
    }
}
