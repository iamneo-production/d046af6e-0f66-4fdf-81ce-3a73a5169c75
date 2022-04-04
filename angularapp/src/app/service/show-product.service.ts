import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShowProductService {
  
  constructor(private http:HttpClient) { }
  showProduct():Observable<Object> 
  {
    return this.http.get("https://8080-dcdceabfeafbddeefdebfefcfdfcddebafafd.examlyiopb.examly.io/getproduct");
  }
}
