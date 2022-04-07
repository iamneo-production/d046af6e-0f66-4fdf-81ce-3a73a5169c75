import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';
import { SharedserviceService } from '../sharedservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:Login=new Login()
  email:any="Hello World";
  password:any;
  public accounts =[]
  constructor(private router: Router,private service:LoginService,private sharedservice:SharedserviceService) {
   }
  setEmail(val:any)
  {
    this.login.email=val;
    this.email=val;
    console.log(this.email)
  }
  setPassword(val:any)
  {
    this.login.password=val;
    this.password=val;
    console.log(this.password)
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
      o.subscribe(data =>this.accounts=data);
      let c=0;
      for(let detail of this.accounts)
      {
        if(this.login.email==detail.email && this.login.password==detail.password)
        {
          c+=1;
          break;
        }
      }
      if(c>0)
      {
        this.sharedservice.setaccount(this.email);
        this.router.navigateByUrl("/customer/home");
      }
      else
      {
        alert("invalid username/password")
      } 
    }
  }
  ngOnInit(): void {
    localStorage.setItem('sessionUser',String(this.login.email));
    console.log("hey");
  }

}