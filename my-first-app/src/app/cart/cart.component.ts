import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private dS: DataService) { }


  cartList: any;
  addToCartList(data: any) {
    this.cartList = data;
  }

  ngOnInit(): void {
    this.dS.getCartItems().subscribe((data) => this.addToCartList(data));
  }

}
