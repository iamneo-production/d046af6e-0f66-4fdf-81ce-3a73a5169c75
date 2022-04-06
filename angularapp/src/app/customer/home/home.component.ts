import { Component, OnInit } from '@angular/core';
// import { LoginComponent } from 'src/app/login/login.component';
import { ShowProductService } from '../../service/show-product.service';
import { SharedserviceService } from 'src/app/sharedservice.service';
import { Cart } from 'src/app/cart';
import { CartService } from 'src/app/cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public products=[];
  account:string;
  message:any;
  cart:Cart=new Cart()
  constructor(private service:ShowProductService,private sharedservice:SharedserviceService,private cartservice:CartService) { }

  ngOnInit(): void {
    this.service.showProduct().subscribe(data=>{
this.products=data;

    });
  }
  addtocart(value:any)
  {
    this.account=this.sharedservice.getaccount();
    this.cart.UserId=this.account;
    this.cart.productname=value.productName;
    this.cart.price=value.price;
    this.cart.quantity=1;
    let g=this.cartservice.addtocart(this.cart);
    g.subscribe(data=>this.message=data)
    alert("sucessfully added to cart");
  }

}
