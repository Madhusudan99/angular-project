import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { ProductComponent } from './product/product.component';
=======
import { BuyerComponent } from './buyer/buyer.component';
>>>>>>> 9f2c39e01891fb53b2d95bea4ff07edfb2186c89
=======
import { CustomerComponent } from './customer/customer.component';
>>>>>>> 08ddf4d383a4693576107c6c4c005a37aed9f2c7

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    ProductComponent
=======
    BuyerComponent
>>>>>>> 9f2c39e01891fb53b2d95bea4ff07edfb2186c89
=======
    CustomerComponent
>>>>>>> 08ddf4d383a4693576107c6c4c005a37aed9f2c7
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
