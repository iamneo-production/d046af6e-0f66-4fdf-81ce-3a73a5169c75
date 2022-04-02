package com.examly.springapp.orders;
import java.lang.annotation.Inherited;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="Orders")
public class Orders {
    @Id
    @Column(name="id")
    public int id;
    @Column(name="UserId")
    public String UserId;
    @Column(name="ProductName")
    public String ProductName;
    @Column(name="quantity")
    public int quantity;
    @Column(name="Price")
    public int Price;
    @Column(name="Status")
    public String Status;
    public Orders(int id,String UserId,String ProductName,int quantity,int price,String Status)
    {
        this.id=id;
        this.UserId=UserId;
        this.ProductName=ProductName;
        this.quantity=quantity;
        this.Price=price;
        this.Status=Status;
    }
    public Orders()
    {

    }
}