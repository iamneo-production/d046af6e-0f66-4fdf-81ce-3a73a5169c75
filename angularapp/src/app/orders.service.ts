import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOrderdetails } from './orderdetails';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  showorders(value:any):Observable<IOrderdetails[]>
  {
    let g=this.http.post<IOrderdetails[]>("https://8080-dcdceabfeafbddeefdebfefcfdfcddebafafd.examlyiopb.examly.io/getorders",value);
    return g;
  }
  displayorders():Observable<IOrderdetails[]>
  {
    let g=this.http.get<IOrderdetails[]>("https://8080-dcdceabfeafbddeefdebfefcfdfcddebafafd.examlyiopb.examly.io/vieworders")
    return g;
  }
  
}
