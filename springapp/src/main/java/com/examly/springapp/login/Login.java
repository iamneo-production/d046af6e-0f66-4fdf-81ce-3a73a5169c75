package com.examly.springapp.login;
import java.lang.annotation.Inherited;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="Login")
public class Login {
    @Id
    @GeneratedValue
    public int id;
    public String email;
    public String password;
    public Login(String email,String password)
    {
        this.email=email;
        this.password=password;
    }
}
