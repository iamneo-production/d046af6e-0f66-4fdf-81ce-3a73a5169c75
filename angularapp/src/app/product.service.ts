import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  message:any;
  constructor(private http: HttpClient) {

   }
  SetProduct(product:Product) : Observable <object>
  {
    let g=this.http.post("https://8080-dcdceabfeafbddeefdebfefcfdfcddebafafd.examlyiopb.examly.io/save1",product);
    g.subscribe((data)=>this.message=data);
    return g;
  }
}
