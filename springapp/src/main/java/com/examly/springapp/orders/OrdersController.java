package com.examly.springapp.orders;
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
import com.examly.springapp.orders.OrdersRepository;
import com.examly.springapp.orders.Orders;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.examly.springapp.cart.Cart;
import java.util.List;
@CrossOrigin(origins="*")
@RestController
public class OrdersController {
    @Autowired
    public OrdersRepository ordersRepository;
    @Autowired
    public CartRepository cartRepository;
    @PostMapping("placeorder")
    public Orders placeorder(@RequestBody Orders o)
    {
        ordersRepository.save(o);
        cartRepository.deleteById(o.id);
        return o;
    }
    @PostMapping("getorders")
    public List<Orders> getorders(@RequestBody String user)
    {
        Iterable<Orders> o= ordersRepository.findAll();
        List<Orders> p =new ArrayList<Orders>();
        for(Orders s: o)
        {
            if(s.UserId.equals(user))
            {
                p.add(s);
            }
        }
        return p;
    }
    @GetMapping("vieworders")
    public List<Orders> vieworders()
    {
        Iterable<Orders> o= ordersRepository.findAll();
        List<Orders> p =new ArrayList<Orders>();
        for(Orders s: o)
        {
            p.add(s);
        }
        return p;
    }
}
