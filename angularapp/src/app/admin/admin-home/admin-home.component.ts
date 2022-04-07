import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShowProductService } from 'src/app/service/show-product.service';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  public productssaved=[]
  message:any;
  constructor(private router: Router, private service:ShowProductService) {
    
   }
   onClick(){
    this.router.navigateByUrl("/admin/updateProduct")
   }
   onDelete(value:any){
      let g=this.service.deleteproduct(value.productId);
      g.subscribe(data=>this.message=data);
      alert("product deleted sucessfully");
   }
  ngOnInit(): void {
    let g=this.service.showProduct();
    g.subscribe(data=>this.productssaved=data);
    console.log(this.productssaved)
  }

}
