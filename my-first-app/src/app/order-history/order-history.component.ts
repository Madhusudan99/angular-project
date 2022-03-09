import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  orderList: any;
  constructor(private dS: DataService) { }

  
  ngOnInit(): void {
    this.orderList = this.dS.getOrderHistory().subscribe((data) => this.orderList = data);
  }

}
