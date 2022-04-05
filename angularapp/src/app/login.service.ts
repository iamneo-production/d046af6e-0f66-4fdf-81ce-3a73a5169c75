import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Login} from './login'
import {ILogindetails} from './logindetails';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  message:any;
  constructor(private http: HttpClient) { }
  LoginAccount(loginDetails:Login): Observable<ILogindetails[]>
  {
    let g= this.http.post<ILogindetails[]>("https://8080-dcdceabfeafbddeefdebfefcfdfcddebafafd.examlyiopb.examly.io/login",loginDetails);
    return g;
  }
}
