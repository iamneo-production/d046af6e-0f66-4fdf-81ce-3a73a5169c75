import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

   }
  SetProduct() : Observable <object>
  {
    return this.http.get("Hello");
  }
}
