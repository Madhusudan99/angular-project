import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { BuyerComponent } from './buyer/buyer.component';
=======
import { CustomerComponent } from './customer/customer.component';
<<<<<<< HEAD
import { SellerComponent } from './seller/seller.component';
=======
>>>>>>> 08ddf4d383a4693576107c6c4c005a37aed9f2c7
>>>>>>> 9f2c39e01891fb53b2d95bea4ff07edfb2186c89

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    CustomerComponent,
    SellerComponent
=======
<<<<<<< HEAD
    BuyerComponent
=======
    CustomerComponent
>>>>>>> 08ddf4d383a4693576107c6c4c005a37aed9f2c7
>>>>>>> 9f2c39e01891fb53b2d95bea4ff07edfb2186c89
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
