package com.examly.springapp.login;
import org.springframework.data.repository.CrudRepository;
import java.util.List;
public interface LoginRepository extends CrudRepository<Login,Integer>{
    public Login findByEmail(String email);
}