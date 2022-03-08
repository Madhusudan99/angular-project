import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerComponent } from './buyer/buyer.component';
import { CustomerComponent } from './customer/customer.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { SellerComponent } from './seller/seller.component';

import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'cart',component:CartComponent, canActivate:[AuthGuard]},
  {path:'customer',component:CustomerComponent, canActivate:[AuthGuard]},
  {path:'customer/form',component:FormComponent, canActivate:[AuthGuard]},
  {path:'product',component:ProductComponent, canActivate:[AuthGuard]},
  {path:'buyer',component:BuyerComponent, canActivate:[AuthGuard]},
  {path:'seller',component:SellerComponent, canActivate:[AuthGuard]},
  {path:'form',component:FormComponent, canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], 
  providers: [AuthGuard]
})
export class AppRoutingModule { }
