import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './account';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  message:any;
  constructor(private http: HttpClient) { }
  createAccount(userdetails:Account):Observable<object>
  {
    let g= this.http.post("https://8080-dcdceabfeafbddeefdebfefcfdfcddebafafd.examlyiopb.examly.io/User/signup",userdetails,{responseType:'text' as 'json'});
    g.subscribe((data)=>this.message=data);
    console.log(this.message,g)
    return g;
  }
}
