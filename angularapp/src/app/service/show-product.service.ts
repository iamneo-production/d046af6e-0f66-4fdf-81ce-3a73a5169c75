import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShowProduct } from '../class/show-product';
import {IDisplayproduct} from '../displayproduct';
@Injectable({
  providedIn: 'root'
})
export class ShowProductService {
  message:any;
  constructor(private http:HttpClient) { }
  showProduct():Observable<IDisplayproduct[]> 
  {
    return this.http.get<IDisplayproduct[]> ("https://8080-dcdceabfeafbddeefdebfefcfdfcddebafafd.examlyiopb.examly.io/getproduct");
  }
  updateProduct(product:ShowProduct):Observable<object>
  {
    let g= this.http.post("https://8080-dcdceabfeafbddeefdebfefcfdfcddebafafd.examlyiopb.examly.io/editproduct",product,{responseType:'text' as 'json'});
    g.subscribe((data)=>this.message=data);
    console.log(this.message,g)
    return g;
  }
}
