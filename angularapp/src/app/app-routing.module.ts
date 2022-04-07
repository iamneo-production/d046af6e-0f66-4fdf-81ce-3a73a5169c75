import { CartComponent } from './customer/cart/cart.component';
import { HomeComponent } from './customer/home/home.component';
import { UpdateproductComponent } from './admin/updateproduct/updateproduct.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyordersComponent } from './customer/myorders/myorders.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { SignupComponent } from './signup/signup.component'
import { LoginComponent } from './login/login.component'
import { AuthGuard } from './auth.guard';
const routes: Routes = [
 
  {path:"admin/addProduct", component: AddproductComponent,canActivate:[AuthGuard]},
  {path:"admin/updateProduct",component: UpdateproductComponent,canActivate:[AuthGuard]},
  {path:"customer/home",component:HomeComponent,canActivate:[AuthGuard]},
  {path:"customer/cart",component:CartComponent,canActivate:[AuthGuard]},
  {path:"customer/MyOrders",component:MyordersComponent,canActivate:[AuthGuard]},
  {path:"admin/home",component:AdminHomeComponent,canActivate:[AuthGuard]},
  {path:"admin/order",component:OrdersComponent,canActivate:[AuthGuard]},
  {path:"signup",component:SignupComponent},
  {path:"",component:LoginComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

