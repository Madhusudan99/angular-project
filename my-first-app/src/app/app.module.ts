import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { BuyerComponent } from './buyer/buyer.component';
import { CustomerComponent } from './customer/customer.component';
import { SellerComponent } from './seller/seller.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellerFormComponent } from './seller-form/seller-form.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    SellerComponent,
    ProductComponent,
    BuyerComponent,
    CustomerComponent,
    PageNotFoundComponent,
    FormComponent,
<<<<<<< HEAD
    SellerFormComponent
=======
    LoginComponent
>>>>>>> 617343de4c77eef5e83254c1400e7cbc51c100ed
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
