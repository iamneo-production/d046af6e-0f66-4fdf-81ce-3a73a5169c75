import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  account:Account=new Account();
  message:any;
  constructor(private service:AccountService) {

   }

  ngOnInit(): void {
  }
  SignUp()
  {
    console.log(this.account.email);
    this.service.createAccount(this.account);
  }
  SetEmail(value:String)
  {
    if(value)
    this.account.email=value;
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
    this.account.role="user";
    this.account.active=false;}
  }

}