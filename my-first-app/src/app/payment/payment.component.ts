import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public dS: DataService, private modalService: NgbModal, private fb: FormBuilder,private router:Router) { }

  transactionid:any;
  productdata:any;
  paymentForm:any;
  ngOnInit(): void {
    this.dS.getTransactionId();
    if(this.dS.paymentauthentication){
      
      this.productdata=this.dS.paymentdata;
      
      console.log(this.dS.paymentdata);
      
      this.paymentForm=this.fb.group({
        cardNumber:['',Validators.required],
        dateyear:['',Validators.required],
        cvvCode:['',Validators.required],
        cardNo:['',Validators.required],
        nameonCard:['',Validators.required]
      });
      }
    else{
      this.router.navigate(['/','login']);
    }
  }

  payment(){
    alert("Payment Successfull!");
  }

  productdetails:any;
  updateproduct(){
    this.dS.getProductDataById(this.productdata.id).subscribe((data)=>{
      this.addData(data);
    });
  }
  orderhistory:any;
  addData(data:any)
  {
    this.productdetails=data;
    this.orderhistory=this.fb.group({
      transactionId:[this.dS.dummy],
      username:[this.dS.username],
      product_name:[this.productdetails.product_name],
      amount:[this.productdetails.price]
    });
    this.dS.pushPaymentData(this.orderhistory.value).subscribe((data)=>console.log(data));
    this.productdetails.units_available-=1;
    this.dS.putProductData(this.productdetails).subscribe((data)=>alert("Order Placed"));
    this.dS.deleteCartItem(this.productdata.id).subscribe((data)=>console.log(data));
    this.router.navigate(['/','product']);
  }
}
