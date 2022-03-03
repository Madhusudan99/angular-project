import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerComponent } from './buyer/buyer.component';
import { CustomerComponent } from './customer/customer.component';
import { FormComponent } from './form/form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { SellerComponent } from './seller/seller.component';


const routes: Routes = [
  {path:'',component:CustomerComponent},
  {path:'customer',component:CustomerComponent},
  {path:'customer/form',component:FormComponent},
  {path:'product',component:ProductComponent},
  {path:'buyer',component:BuyerComponent},
  {path:'seller',component:SellerComponent},
  {path:'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
