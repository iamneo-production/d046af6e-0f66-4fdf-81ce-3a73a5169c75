import { CartComponent } from './customer/cart/cart.component';
import { HomeComponent } from './customer/home/home.component';
import { UpdateproductComponent } from './admin/updateproduct/updateproduct.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyordersComponent } from './customer/myorders/myorders.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { OrdersComponent } from './admin/orders/orders.component';


const routes: Routes = [
  {path:"admin/addProduct", component: AddproductComponent},
  {path:"admin/updateProduct",component: UpdateproductComponent},
  {path:"customer/home",component:HomeComponent},
  {path:"customer/cart",component:CartComponent},
  {path:"customer/MyOrders",component:MyordersComponent},
  {path:"admin/home",component:AdminHomeComponent},
  {path:"admin/order",component:OrdersComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

