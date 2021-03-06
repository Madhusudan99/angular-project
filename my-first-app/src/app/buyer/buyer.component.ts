import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  constructor(private dS: DataService, private modalService: NgbModal, private fb: FormBuilder) { }

  buyerList: any;
  myForm: any;
  formIsNew = false;
  emptyForm = {
    "buyer_name": "",
    "buyer_email": "",
    "buyer_address": {
      "street": "",
      "suite": "",
      "city": "",
      "zipcode": ""
    },
    "phone": "",
    "website": "",
    "company": {
      "name": "",
      "catchPhrase": "",
    },
  }


  addToBuyerList(data: any) {
    this.buyerList = data;
    console.log(this.buyerList)
  }

  ngOnInit(): void {
    this.dS.getBuyerData().subscribe((data) => this.addToBuyerList(data));

    this.myForm = this.fb.group({
      BuyerName: ['', Validators.required],
      BuyerEmail: ['', [Validators.required, Validators.email]],
      // BuyerAddress: ['', Validators.required],
      Street: ['', Validators.required],
      Suite: ['', Validators.required],
      City: ['', Validators.required],
      Zipcode: ['', Validators.required],
      Phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      Website: ['', Validators.required],
      // Company: ['', Validators.required],
      Name: ['', Validators.required],
      CatchPhrase: ['', Validators.required]
    });
  }

  BuyerFormData() {
    console.log(this.myForm.value);
  }

  // currentDate:any;
  objectToFormData(objData: any) {
    // this.myForm.FirstName = objData.first_name;
    // this.myForm.LastName = objData.last_name;
    // this.currentDate = new Date(Number(objData.date_of_birth.split("-")[0]), Number(objData.date_of_birth.split("-")[1]), Number(objData.date_of_birth.split("-")[2]));
    // console.log(objData.date_of_birth)
    this.myForm.setValue({
      BuyerName: objData.buyer_name,
      BuyerEmail: objData.buyer_email,
      // BuyerAddress: ['', Validators.required],
      Street: objData.buyer_address.street,
      Suite: objData.buyer_address.suite,
      City: objData.buyer_address.city,
      Zipcode: objData.buyer_address.zipcode,
      Phone: objData.phone,
      Website: objData.website,
      // Company: objData
      Name: objData.company.name,
      CatchPhrase: objData.company.catchPhrase,
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
