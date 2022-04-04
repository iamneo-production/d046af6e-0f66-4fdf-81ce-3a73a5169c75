import { Component, OnInit } from '@angular/core';

import { ShowProductService } from '../../service/show-product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any;
  constructor(private service:ShowProductService) { }

  ngOnInit(): void {
    this.service.showProduct().subscribe(data=>{
this.products=data;
    });
  }

}
