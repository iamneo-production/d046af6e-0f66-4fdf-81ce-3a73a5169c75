import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Login} from './login'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  message:any;
  constructor(private http: HttpClient) { }
  LoginAccount(loginDetails:Login): Observable<object>
  {
    let g= this.http.post("https://8080-dcdceabfeafbddeefdebfefcfdfcddebafafd.examlyiopb.examly.io/login",loginDetails,{responseType:'text' as 'json'});
    g.subscribe((data)=>this.message=data);
    console.log(this.message);
    return g;
  }
}
