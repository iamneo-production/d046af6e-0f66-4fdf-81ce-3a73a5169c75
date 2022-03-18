import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './customer/addproduct/addproduct.component';
import { UpdateproductComponent } from './customer/updateproduct/updateproduct.component';
import { HomeComponent } from './customer/home/home.component';
import { CartComponent } from './customer/cart/cart.component';
import { NavbarComponent } from './customer/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    UpdateproductComponent,
    HomeComponent,
    CartComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
