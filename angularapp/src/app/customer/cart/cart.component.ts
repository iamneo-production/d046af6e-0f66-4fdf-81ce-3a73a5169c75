import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { SharedserviceService } from 'src/app/sharedservice.service';
import { Orders } from 'src/app/orders';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cartitems = [];
  public selecteditems=[];
  ordering:Orders = new Orders();
  message:any;
  message1:any;
  account:any;
  cost:number;
  constructor(private service:CartService,private sharedservice:SharedserviceService) { }

  ngOnInit(): void {
    this.account=this.sharedservice.getaccount();
    let g=this.service.showcart(this.account);
    g.subscribe(data => this.cartitems=data);
  }
  convert(value:any):number
  {
    let h=parseInt(value,10);
    return h;
  }
  select(value:any)
  {
      let c1=0;
      for(let items of this.selecteditems)
      {
        if(items==value)
        c1+=1;
        break;
      }
      if(c1==0)
      {
        this.selecteditems.push(value);
        alert("item ready to be placed for order");
      }
  }
  delete(value:any)
  {
    let o=[];
    for(let items of this.selecteditems)
    {
      if(items!=value)
      {
        o.push(items);
      }
    }
    this.selecteditems=[];
    for(let items of o)
    {
      this.selecteditems.push(items);
    }
    let g=this.service.deletefromcart(value.cartId);
    g.subscribe(data=> this.message=data);
    alert("item deleted from cart");
  }
  placeOrder()
  {
    for(let items of this.selecteditems)
    {
      this.ordering.id=items.cartId;
      this.ordering.ProductName=items.productname;
      this.ordering.UserId=items.UserId;
      this.ordering.quantity=items.quantity;
      this.ordering.Price=items.quantity*parseInt(items.price);
      this.ordering.Status="ready";
      let g = this.service.placeorder(this.ordering);
      g.subscribe(data=>this.message1=data);
    }
    let h=this.service.showcart(this.account);
    h.subscribe(data => this.cartitems=data);
    alert("orders placed sucessfully");
  }
}
