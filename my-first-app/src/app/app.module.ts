import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductComponent } from './product/product.component';

import { BuyerComponent } from './buyer/buyer.component';


import { CustomerComponent } from './customer/customer.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { SellerComponent } from './seller/seller.component';
import { FormComponent } from './form/form.component';
=======
>>>>>>> 08ddf4d383a4693576107c6c4c005a37aed9f2c7
>>>>>>> 9f2c39e01891fb53b2d95bea4ff07edfb2186c89
=======

>>>>>>> d10b5d1037c9123193c7eb3970a77a2030c56db3

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    CustomerComponent,
    SellerComponent,
    FormComponent
=======
<<<<<<< HEAD
    BuyerComponent
=======
    CustomerComponent
>>>>>>> 08ddf4d383a4693576107c6c4c005a37aed9f2c7
>>>>>>> 9f2c39e01891fb53b2d95bea4ff07edfb2186c89
=======
    ProductComponent,
    BuyerComponent,
    CustomerComponent,
>>>>>>> d10b5d1037c9123193c7eb3970a77a2030c56db3
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
