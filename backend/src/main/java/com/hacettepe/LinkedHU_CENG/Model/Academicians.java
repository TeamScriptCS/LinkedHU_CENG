package com.hacettepe.LinkedHU_CENG.Model;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name="academicians")
public class Academicians extends  BaseEntity{
    @Id
    @SequenceGenerator(name="ac_seq_gen",sequenceName = "ac_gen",initialValue = 100,allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "ac_seq_gen")
    @Column(name="id_user")
    private int id_user;
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