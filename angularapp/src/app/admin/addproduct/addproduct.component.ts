import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  product:Product = new Product()
  constructor(private service: ProductService) { }
  Setproductname(value:string)
  {
    this.product.productName=value;
    console.log(this.product.productName);
  }
  Setprice(value:string)
  {
    this.product.price=value;
    console.log(this.product.price);
  }
  Setdescription(value:string)
  {
    this.product.description=value;
    console.log(this.product.description);
  }
  Setimageurl(value:string)
  {
    this.product.imageURL=value;
    console.log(this.product.imageURL);
  }
  Setquantity(value:string)
  {
    this.product.quantity=value;
    console.log(this.product.quantity);
  }
  add()
  {
      console.log("hii");
      this.service.SetProduct(this.product);
      console.log("operation sucess");
  }
  ngOnInit(): void {
  }


}
