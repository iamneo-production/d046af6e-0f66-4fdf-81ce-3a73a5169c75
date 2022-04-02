package com.examly.springapp.customer;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="Account")
public class Account {
    @Id
    @GeneratedValue
    public int id;
    @Column(name ="email", unique=true)
    public String email;
    @Column (name ="Username" , unique=true)
    public String username;
    @Column(name ="Mobileno",unique=true)
    public String mobileno;
    @Column(name="Password")
    public String password;
    @Column(name="Active")
    public boolean active;
    @Column(name="Role")
    public String role;
    public Account(String email,String username,String mobileno,String password,String role)
    {
        this.email=email;
        this.username=username;
        this.mobileno=mobileno;
        this.password=password;
        this.role=role;
        this.active=false;
    }
}
