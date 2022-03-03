import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private dS: DataService, private modalService: NgbModal) { }

  customerList:any;

  addToCustomerList(data: any) {
    this.customerList = data;
    console.log(this.customerList)
  }

  ngOnInit(): void {
    this.dS.getCustomerData().subscribe((data) => this.addToCustomerList(data));
  }

  closeResult = '';
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
}
}