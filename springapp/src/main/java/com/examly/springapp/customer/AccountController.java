package com.examly.springapp.customer;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
@RestController
@RequestMapping("User")
public class AccountController {
    @Autowired
    public AccountRepository accountRepository;
    @PostMapping("/signup")
    public boolean signup()
    {
        Account g = new Account("email","username","mobileno","Password","role");
        accountRepository.save(g);
        return true;
    }
    @GetMapping("/Login")
    public List<Account> Login()
    {
        return (List<Account>) accountRepository.findAll();
        // Account g = new Account("email","username","mobileno","password","user");
        // return true;
    }
}
