package com.examly.springapp.customer;
import java.lang.Iterable;
import java.util.*;
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
import com.examly.springapp.cart.CartRepository;
import com.examly.springapp.cart.Cart;
import java.util.List;
@RestController
public class CartController {
    @Autowired
    public CartRepository cartRepository;
    @PostMapping("addtocart")
    public Cart addtocart(@RequestBody Cart g)
    {
        Iterable<Cart> o=cartRepository.findAll();
        for(Cart s: o)
        {
            if(s.UserId.equals(g.UserId) && s.productname.equals(g.productname))
            {
                s.quantity+=1;
                cartRepository.save(s);
                return s;
            }
        }
        cartRepository.save(g);
        return g;
    }
    @GetMapping("showcart")
    public List<Cart> showcart(@RequestBody String User)
    {
        Iterable<Cart> o=cartRepository.findAll();
        // return o;
        List<Cart> p = new ArrayList<Cart>();
        for(Cart s:o)
        {   
            if(s.UserId.equals(User))
            {
                p.add(s);
            }
        }
        return p;
    }
    @PostMapping("deletecart")
    public boolean delete(@RequestBody int id1)
    {
        cartRepository.deleteById(id1);
        return true;
    }
}
