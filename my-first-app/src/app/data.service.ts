import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  urls = {
    "buyerData": "http://localhost:3000/buyer_details",
    "customerData":"http://localhost:3000/customer_details",
    "loginData": "http://localhost:3000/login_details",
    "sellerData": "http://localhost:3000/seller_name"
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
  putCustomerData(data:any) {
    return this.http.put(this.urls.customerData+data.id, data);
  }
  deleteCustomerData(id:any) {
    return this.http.delete(this.urls.customerData+id);
  }
  postCustomerData(data: any) {
    return this.http.post(this.urls.customerData, data);
  }
}
