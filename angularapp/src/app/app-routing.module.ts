import { CartComponent } from './customer/cart/cart.component';
import { HomeComponent } from './customer/home/home.component';
import { UpdateproductComponent } from './customer/updateproduct/updateproduct.component';
import { AddproductComponent } from './customer/addproduct/addproduct.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'add', component: AddproductComponent},
  {path:'update',component: UpdateproductComponent},
  {path:'home',component:HomeComponent},
  {path:"cart",component:CartComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

