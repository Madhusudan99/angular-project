import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  constructor(private dS: DataService, private modalService: NgbModal, private fb: FormBuilder) { }

  SellerForm: any;
  SellerList: any;
  formIsNew = true;
  emptyForm = {
    "seller_name": "",
    "seller_email": "",
    "seller_address": {
      "street": "",
      "suite": "",
      "city": "",
      "zipcode": ""
    },
    "phone": "",
    "website": ""
  };

  addToSellerList(data: any) {
    this.SellerList = data;
    console.log(this.SellerList)
  }
  ngOnInit(): void {

    this.dS.getSellerData().subscribe((data) => this.addToSellerList(data));

    this.SellerForm = this.fb.group({
      seller_name: ['', Validators.required],
      street: ['', Validators.required],
      suite: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', Validators.required],
      seller_email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      website: ['', Validators.required],

    });
  }


  SellerFormData() {
    console.log(this.SellerForm.value);
  }
  // currentDate:any;
  objectToFormData(objData: any) {
    // this.myForm.FirstName = objData.first_name;
    // this.myForm.LastName = objData.last_name;
    // this.currentDate = new Date(Number(objData.date_of_birth.split("-")[0]), Number(objData.date_of_birth.split("-")[1]), Number(objData.date_of_birth.split("-")[2]));
    // console.log(objData.date_of_birth)
    this.SellerForm.setValue({
      seller_name: objData.seller_name,
      seller_email: objData.seller_email,
      street: objData.seller_address.street,
      suite: objData.seller_address.suite,
      city: objData.seller_address.city,
      zipcode: objData.seller_address.zipcode,
      website: objData.website,
      phone: objData.phone,
    });
    // console.log(this.myForm.FirstName.value)
    // console.log(this.myForm.LastName)
    // console.log(this.currentDate);
  }

  closeResult = '';
  open(content: any, data: any) {

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl', backdrop: 'static' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });


    console.log(data)
    if (data) {
      this.formIsNew = false;
      this.objectToFormData(data);
    }
    else {
      this.formIsNew = true;
      this.objectToFormData(this.emptyForm);
    }

  }

}

