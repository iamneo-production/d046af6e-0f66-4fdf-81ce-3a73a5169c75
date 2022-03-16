import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"home", component:HomepageComponent},
  {path:"cart",component:CartComponent},
  {path:'addproduct', component: AddproductComponent},
  {path:'updateproduct',component: UpdateproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
