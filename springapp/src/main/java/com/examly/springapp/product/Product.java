package com.examly.springapp.product;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Product")
public class Product {
    @Id
    @GeneratedValue
    @Column(name="productId",unique=true)
    public String productId;
    @Column(name="imageURL")
    public String imageURL;
    @Column(name="productName")
    public String productName;
    @Column(name="price")
    public String price;
    @Column(name="description")
    public String description;
    @Column(name="quantity")
    public String quantity;
    public Product(String productId,String imageURL,String productName,String price,String description,String quantity)
    {
        this.productId=productId;
        this.imageURL=imageURL;
        this.productName=productName;
        this.price=price;
        this.description=description;
        this.quantity=quantity;
    }
}
