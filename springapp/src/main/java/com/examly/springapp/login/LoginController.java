package com.examly.springapp.customer;
import java.lang.Iterable;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.CommandLineRunner;
import com.examly.springapp.login.Login;
import com.examly.springapp.login.LoginRepository;
import java.util.List;
@RestController
// @RequestMapping("User")
public class LoginController {
    @Autowired
    public AccountRepository accountRepository;
    @Autowired
    public LoginRepository loginRepository;
    // @Bean
    @PostMapping("login")
    public boolean login(@RequestBody Login g)
    {   
        Iterable<Login> o=loginRepository.findAll();
        boolean c=false;
        for(Login s: o)
        {   
            if(s.email.equals(g.email) && s.password.equals(g.password))
            c=true;
        }
        return c;
    }
    
}
