import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:Login=new Login()
  constructor(private router: Router,private service:LoginService) {
   }
  setEmail(val:any)
  {
    this.login.email=val;
    console.log(this.login.email)
  }
  setPassword(val:any)
  {
    this.login.password=val;
    console.log(this.login.password)
  }
  go()
  {
    if(this.login.email=="Admin@FoodFox.com" && this.login.password=="Hello_Admin")
    {
      this.router.navigateByUrl("/admin/home");
      console.log(this.login.email);
      console.log(this.login.password);
    }
    else
    {
        let o=this.service.LoginAccount(this.login);
        console.log(o)   
    }
  }
  ngOnInit(): void {
  }

}