package com.hacettepe.LinkedHU_CENG.Model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="graduates")
public class Graduates extends  BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id_user",unique = true)
    private int id;
    @Column(name="e_mail")
    private String e_mail;
    @Column(name="password")
    private String password;
    @Column(name="name")
    private String name;
    @Column(name="surname")
    private String surname;
    @Column(name="number")
    private int number;
    @Column(name="phone_number")
    private int phone_number;
    @Column(name="address")
    private String address;
    @Column(name="gender")
    private String gender;
}
