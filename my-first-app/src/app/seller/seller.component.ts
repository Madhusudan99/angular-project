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
  cleanedFormData:any;
  emptyForm = {
    "id": Math.floor(Math.random() * 100),
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
      id: [''],
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
    console.log(this.SellerForm.value);
    this.cleanedFormData = {
      "id": this.SellerForm.value.id,
      "seller_name": this.SellerForm.value.seller_name,
      "seller_email": this.SellerForm.value.seller_email,
    "seller_address": {
      "street": this.SellerForm.value.street,
      "suite": this.SellerForm.value.suite,
      "city": this.SellerForm.value.city,
      "zipcode": this.SellerForm.value.zipcode
    },
    "phone": this.SellerForm.value.phone,
    "website": this.SellerForm.value.website
    }

    // "id": 1,
    // "seller_name": "Leanne Graham",
    // "seller_email": "Sincere@april.biz",
    // "seller_address": {
    //   "street": "Kulas Light",
    //   "suite": "Apt. 556",
    //   "city": "Gwenborough",
    //   "zipcode": "92998-3874"
    // },
    // "phone": "17707368031",
    // "website": "hildegard.org"

    console.log(this.cleanedFormData);

    this.dS.putSellerData(this.cleanedFormData).subscribe((data) => console.log(data));
  }
  // currentDate:any;
  objectToFormData(objData: any) {
    // this.myForm.FirstName = objData.first_name;
    // this.myForm.LastName = objData.last_name;
    // this.currentDate = new Date(Number(objData.date_of_birth.split("-")[0]), Number(objData.date_of_birth.split("-")[1]), Number(objData.date_of_birth.split("-")[2]));
    // console.log(objData.date_of_birth)
    this.SellerForm.setValue({
      id: objData.id,
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

  deleteSeller() {
    console.log(this.SellerForm.value.id);
    this.dS.deleteSellerData(this.SellerForm.value.id).subscribe();
    this.modalService.dismissAll()
  }

}

