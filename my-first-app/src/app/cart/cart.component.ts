import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private dS: DataService, private router: Router) { }


  cartList: any;
  addToCartList(data: any) {
    this.cartList = data;
  }

  ngOnInit(): void {
    this.dS.getCartItems().subscribe((data) => this.addToCartList(data));
  }

  removeItem(data: any, index: any) {
    this.dS.deleteCartItem(data.id).subscribe();
    this.cartList.splice(index, 1);
  }

  payment(data:any)  {
    this.dS.paymentdata = data;    
    this.dS.paymentauthentication=true;
    this.router.navigate(['/', 'payment']);
  }
}
