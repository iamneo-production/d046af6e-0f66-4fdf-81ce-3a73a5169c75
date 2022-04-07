import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { UpdateproductComponent } from './admin/updateproduct/updateproduct.component';
import { HomeComponent } from './customer/home/home.component';
import { CartComponent } from './customer/cart/cart.component';
import { NavbarComponent } from './customer/navbar/navbar.component';
import { MyordersComponent } from './customer/myorders/myorders.component';
import { ProductsComponent } from './admin/products/products.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { HttpClientModule } from'@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component'
import { AuthguardServiceService } from './authguard-service.service';
@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    UpdateproductComponent,
    HomeComponent,
    CartComponent,
    NavbarComponent,
    MyordersComponent,
    ProductsComponent,
    OrdersComponent,
  
    AdminNavbarComponent,
  
    AdminHomeComponent,
  
    SignupComponent,
  
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthguardServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
