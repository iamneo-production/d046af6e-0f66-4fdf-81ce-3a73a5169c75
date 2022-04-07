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
import com.examly.springapp.product.ProductRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.examly.springapp.product.Product;
import java.util.List;
import java.util.*;
@CrossOrigin(origins="*")
@RestController
public class ProductController {
    @Autowired
    public ProductRepository productRepository;
    @PostMapping("save1")
    public Product save(@RequestBody Product g)
    {
        productRepository.save(g);
        return g;
    }
    @GetMapping("getproduct")
    public List<Product> getProduct()
    {
        Iterable<Product> o=productRepository.findAll();
        List<Product> p=new ArrayList<Product>();
        for(Product s:o)
        {
            p.add(s);
        }
        return p;
    }
    @GetMapping("producteditdata")
    public Product ProductEditData(@RequestBody int id1)
    {
        Iterable<Product> o =productRepository.findAll();
        for(Product s:o)
        {
            if(s.productId==id1)
            {
                return s;
            }
        }
        Product h= new Product();
        return h;
    }
    @PostMapping("editproduct")
    public Iterable<Product> EditProduct(@RequestBody Product g)
    {
        Iterable<Product>o=productRepository.findAll();
        for(Product s:o)
        {
            if(s.productName.equals(g.productName))
            {
                s.productName=g.productName;
                s.price=g.price;
                s.description=g.description;
                s.quantity=g.quantity;
                s.imageURL=g.imageURL;
                productRepository.save(s);
            }
        }
        return o;
    }
    @PostMapping("deleteproduct")
    public boolean delete(@RequestBody int id1)
    {
        productRepository.deleteById(id1);
        return true;
    }
}