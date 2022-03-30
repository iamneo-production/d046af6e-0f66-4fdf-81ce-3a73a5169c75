package com.examly.springapp.cart;

import java.lang.annotation.Inherited;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="Cart")
public class Cart {
    @Id
    @GeneratedValue
    public int cartId;
    @Column(name="UserId")
    public String UserId;
    @Column(name="ProductName")
    public String productname;
    @Column(name="Quantity")
    public String quantity;
    @Column(name="price")
    public String price;
    public Cart(String userId , String productname, String quantity,String price)
    {
        this.UserId=userId;
        this.productname=productname;
        this.quantity=quantity;
        this.price=price;
    }

}
