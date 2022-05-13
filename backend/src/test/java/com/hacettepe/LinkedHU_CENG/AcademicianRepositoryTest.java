package com.hacettepe.LinkedHU_CENG;

import com.hacettepe.LinkedHU_CENG.Model.Academicians;
import com.hacettepe.LinkedHU_CENG.Repository.AcademiciansRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;


@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class AcademicianRepositoryTest {
    @Autowired
    private AcademiciansRepository academiciansRepository;
    @Autowired
    private TestEntityManager entity;
    @Test
    public void testCreateUser() {
        Academicians user = new Academicians();
        user.setE_mail("serc@gmail.com");
        user.setPassword("sercan1423");
        user.setName("sercan");
        user.setSurname("tunk");
        Academicians user2 = new Academicians();
        user2.setE_mail("serceab@gmail.com");
        user2.setPassword("sercan1423");
        user2.setName("bbb");
        user2.setSurname("aaa");
        Academicians savedUser = academiciansRepository.save(user);
        savedUser=academiciansRepository.save(user2);
        //Academicians existUser = entity.find(Academicians.class, savedUser.getId());

//        assertThat(user.getE_mail()).isEqualTo(existUser.getEmail());

    }

}
