import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private dS: DataService, private modalService: NgbModal, private fb: FormBuilder) { }

  customerList: any;
  myForm:any;


  addToCustomerList(data: any) {
    this.customerList = data;
    console.log(this.customerList)
  }

  ngOnInit(): void {
    this.dS.getCustomerData().subscribe((data) => this.addToCustomerList(data));

    this.myForm = this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Birthdate: ['', Validators.required],
      CurrentAddress: ['', Validators.required],
      CurrenthouseNo: ['', Validators.required],
      CurrentCity: ['', Validators.required],
      CurrentState: ['', Validators.required],
      CurrentZip: ['', Validators.required],
      ParmanentAddress: ['', Validators.required],
      ParmanenthouseNo: ['', Validators.required],
      ParmanentCity: ['', Validators.required],
      ParmanentState: ['', Validators.required],
      ParmanentZip: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      PhoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]

    });
  }

  CustomerFormData() {
    console.log(this.myForm.value);
  }

  currentDate:any;
  objectToFormData(objData:any) {
    // this.myForm.FirstName = objData.first_name;
    // this.myForm.LastName = objData.last_name;
    this.currentDate = new Date(Number(objData.date_of_birth.split("-")[0]), Number(objData.date_of_birth.split("-")[1]), Number(objData.date_of_birth.split("-")[2]));
    console.log(objData.date_of_birth)
    this.myForm.setValue({ 
      FirstName: objData.first_name, 
      LastName: objData.last_name,
      Birthdate: this.currentDate,
      CurrentAddress: objData.current_address.street,
      CurrenthouseNo: objData.last_name,
      CurrentCity: objData.last_name,
      CurrentState: objData.last_name,
      CurrentZip: objData.last_name,
      ParmanentAddress: objData.last_name,
      ParmanenthouseNo: objData.last_name,
      ParmanentCity: objData.last_name,
      ParmanentState: objData.last_name,
      ParmanentZip: objData.last_name,
      Email: objData.last_name,
      PhoneNumber: objData.last_name,

    });
    // console.log(this.myForm.FirstName.value)
    // console.log(this.myForm.LastName)
    console.log(this.currentDate);
  }

  closeResult = '';
  open(content: any, data:any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl', backdrop: 'static' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
    this.objectToFormData(data);
  }
}