import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/orders.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public orderdetails=[]
  constructor(private service:OrdersService) { }

  ngOnInit(): void {
    let g=this.service.displayorders();
    g.subscribe(data=>this.orderdetails=data);
  }

}
