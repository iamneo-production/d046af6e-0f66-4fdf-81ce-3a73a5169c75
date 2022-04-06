import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from './cart';
import { Observable } from 'rxjs';
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
}
