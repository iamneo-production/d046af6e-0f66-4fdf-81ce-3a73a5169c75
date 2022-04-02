package com.examly.springapp.customer;
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
@RequestMapping("User")
public class AccountController {
    @Autowired
    public AccountRepository accountRepository;
    @Autowired
    public LoginRepository loginRepository;
    // @Bean
    @PostMapping("signup")
    public Login signup(@RequestBody Account g)
    {   
        accountRepository.save(g);
        Login login=new Login(g.email,g.password);
        loginRepository.save(login);
        return login;
    }
}