package com.hacettepe.LinkedHU_CENG.Model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="students")
public class Student extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id")
    private int id;
    @Column(name="email")
    private String e_mail;
    @Column(name="password")
    private String password;
    @Column(name="name")
    private String name;
    @Column(name="surname")
    private String surname;
}
