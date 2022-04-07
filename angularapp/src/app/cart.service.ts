import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from './cart';
import { Observable } from 'rxjs';
import {ICartdetails} from './cartdetails';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  addtocart(value:Cart): Observable<object>
  {
    let g=this.http.post("https://8080-dcdceabfeafbddeefdebfefcfdfcddebafafd.examlyiopb.examly.io/addtocart",value,{responseType:'text' as 'json'});
    console.log(g);
    return g;
  }
  showcart(value:any): Observable<ICartdetails[]>
  {
    let g=this.http.post<ICartdetails[]>("https://8080-dcdceabfeafbddeefdebfefcfdfcddebafafd.examlyiopb.examly.io/showcart",value);
    return g;
  }
  deletefromcart(value:any):Observable<object>
  {
    let g =this.http.post("https://8080-dcdceabfeafbddeefdebfefcfdfcddebafafd.examlyiopb.examly.io/deletecart",value,{responseType:'text' as 'json'});
    return g;
  }
  placeorder(value:any):Observable<object>
  {
    let g=this.http.post("https://8080-dcdceabfeafbddeefdebfefcfdfcddebafafd.examlyiopb.examly.io/placeorder",value,{responseType:'text' as 'json'});
    return g;
  }
}
