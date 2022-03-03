import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  urls = {
    "buyerData": "http://192.168.43.78:3000/buyer_details",
    "customerData": "http://192.168.43.78:3000/customer_details",
    "loginData": "http://192.168.43.78:3000/login_details",
    "sellerData": "http://192.168.43.78:3000/seller_name"
  }


  getCustomerData() {
    return this.http.get(this.urls.customerData);
  }

  getBuyerData() {
    return this.http.get(this.urls.buyerData);
  }
  getSellerData() {
    return this.http.get(this.urls.sellerData);
  }
}
