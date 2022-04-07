import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/orders.service';
import { SharedserviceService } from 'src/app/sharedservice.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
  public orderdetails=[];
  account:any;
  constructor(private service:OrdersService,private sharedservice:SharedserviceService) { }

  ngOnInit(): void {
    this.account=this.sharedservice.getaccount();
    let g=this.service.showorders(this.account);
    g.subscribe(data=> this.orderdetails=data);
  }

}
