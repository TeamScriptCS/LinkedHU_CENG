package org.teamscript.LinkedHU_CENG.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.teamscript.LinkedHU_CENG.model.Administrator;

import java.util.Optional;


@Repository
public interface AdministratorRepository extends JpaRepository<Administrator, String> {
    public Optional<Administrator> findByName(String username);
}