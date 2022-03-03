import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductComponent } from './product/product.component';

import { BuyerComponent } from './buyer/buyer.component';


import { CustomerComponent } from './customer/customer.component';
import { SellerComponent } from './seller/seller.component';
import { FormComponent } from './form/form.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    SellerComponent,
    FormComponent,
    BuyerComponent,
    CustomerComponent,
    ProductComponent,
    BuyerComponent,
    CustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
