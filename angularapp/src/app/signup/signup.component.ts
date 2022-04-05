import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  account:Account=new Account();
  login:Login=new Login();
  message:any;
  public accounts=[]
  constructor(private service:AccountService,private checkingservice:LoginService) {

   }

  ngOnInit(): void {
  }
  SignUp()
  {
    let h=this.checkingservice.LoginAccount(this.login);
    h.subscribe(data => this.accounts=data);
    let c=0;
    for(let detail of this.accounts)
    {
      if(detail.email==this.login.email)
      {
        c+=1;
        break
      }
    }
    if(c==0)
    {
      this.service.createAccount(this.account);
      alert("Account Sucessfully created");
    }
    else
    {
      alert("User with given mail id already exists");
    }
  }
  SetEmail(value:String)
  {
    if(value)
    {
      this.account.email=value;
      this.login.email=value;
    }
  }
  SetUsername(value:String)
  {
    if(value)
    this.account.username=value;
  }
  SetMobilenum(value:String)
  {
    if(value)
    this.account.mobileno=value;
  }
  SetPassword(value:String)
  {
    if(value)
    {this.account.password=value;
      this.login.password=value;
    this.account.role="user";
    this.account.active=false;}
  }

}