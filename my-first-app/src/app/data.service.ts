import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  loggedIn = false;
  urls = {
    "buyerData": "http://localhost:3000/buyer_details/",
    "customerData": "http://localhost:3000/customer_details/",
    "loginData": "http://localhost:3000/login_details/",
    "sellerData": "http://localhost:3000/seller_details/",
    "productData": "http://localhost:3000/product/",
    "cartData": "http://localhost:3000/cart/",
    "paymentData": "http://localhost:3000/payment_details/", 
    "orderHistory": "http://localhost:3000/payment_details/"
  }


  getCustomerData() {
    return this.http.get(this.urls.customerData);
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

  getSellerData() {
    return this.http.get(this.urls.sellerData);
  }
  putSellerData(data:any) {
    return this.http.put(this.urls.sellerData+data.id, data);
  }
  deleteSellerData(id:any) {
    return this.http.delete(this.urls.sellerData+id);
  }
  postSellerData(data: any) {
    return this.http.post(this.urls.sellerData, data);
  }

  getProductData() {
    return this.http.get(this.urls.productData);
  }
  putProductData(data:any) {
    return this.http.put(this.urls.productData+data.id, data);
  }
  deleteProductData(id:any) {
    return this.http.delete(this.urls.productData+id);
  }
  postProductData(data: any) {
    return this.http.post(this.urls.productData, data);
  }


  getBuyerData() {
    return this.http.get(this.urls.buyerData);
  }
  putBuyerData(data: any) {
    return this.http.put(this.urls.buyerData+data.id, data);
  }
  deleteBuyerData(id:any) {
    return this.http.delete(this.urls.buyerData+id);
  }
  postBuyerData(data:any) {
    return this.http.post(this.urls.buyerData, data);
  }



  getCartItems() {
    return this.http.get(this.urls.cartData);
  }

  postCartItems(data: any) {
    return this.http.post(this.urls.cartData, data);
  }
  deleteCartItem(id: any) {
    return this.http.delete(this.urls.cartData+id);
  }
  handleError(data: any) {
    return data.status;
  }
  putCartItems(data: any) {
    return this.http.put(this.urls.cartData+data.id, data).pipe(
      catchError(this.handleError(data)) // then handle the error
    );
  }

  pushPaymentData(data:any) {
    return this.http.post(this.urls.paymentData, data);
  }

  getProductDataById(data:any){
    return this.http.get(this.urls.productData+data);
  }

  transactionid=1000000;
  paymentdata:any;
  data:any;
  i:number=0;
  transid=0;
  dummy:any;
  
  storeTransaction(data:any){
    this.dummy = data.length;
    // console.log(this.transactionid+this.dummy);
    this.dummy += this.transactionid;
  }

  getTransactionId():any{
    this.http.get(this.urls.paymentData).subscribe((data)=>{
      this.storeTransaction(data);
    });
  }

  paymentauthentication:boolean=false;
  username:any=null;

  getOrderHistory() {
    return this.http.get(this.urls.orderHistory);
  }
}
