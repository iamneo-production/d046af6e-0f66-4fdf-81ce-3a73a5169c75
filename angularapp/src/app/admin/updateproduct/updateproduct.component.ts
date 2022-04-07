import { Component, OnInit } from '@angular/core';
import { ShowProduct } from 'src/app/class/show-product';
import { ShowProductService } from 'src/app/service/show-product.service';
@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  product:ShowProduct = new ShowProduct();
  constructor(private service: ShowProductService) { }

  ngOnInit(): void {
  }
  setproductname(value:any)
  {
    this.product.productName=value;
  }
  setprice(value:any)
  {
    this.product.price=value;
  }
  setdescription(value:any)
  {
    this.product.description=value;
  }
  setimageurl(value:any)
  {
    this.product.imageURL=value;
  }
  setquantty(value:any)
  {
    this.product.quantity=value;
  }
  updateproduct()
  {
    this.service.updateProduct(this.product);
    alert("product updated sucessfully")
  }
}
