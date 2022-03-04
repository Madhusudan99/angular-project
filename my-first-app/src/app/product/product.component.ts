import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private dS: DataService, private modalService: NgbModal, private fb: FormBuilder) { }
  productList: any;
  productForm: any;
  formIsNew = false;
  emptyForm = {
    "product_name": "",
    "product_category": "",
    "product_description": "",
    "units_available": {
      "height": "",
      "width": "",
      "price": "",
      "rating": ""
    },
  }


  addToProductList(data: any) {
    this.productList = data;
    console.log(this.productList)
  }
  ngOnInit(): void {
    this.dS.getCustomerData().subscribe((data) => this.addToProductList(data));

    this.productForm = this.fb.group({
      product_name: ['', Validators.required],
      product_category: ['', Validators.required],
      product_description: ['', Validators.required],
      units_available: ['', Validators.required],
      height: ['', Validators.required],
      width: ['', Validators.required],
      price: ['', Validators.required],
      rating: ['', Validators.required]
    });
  }

  ProductFormData(){
      console.log(this.productForm.value);
  }
  objectToFormData(objData: any) {
    // this.myForm.FirstName = objData.first_name;
    // this.myForm.LastName = objData.last_name;
    // this.currentDate = new Date(Number(objData.date_of_birth.split("-")[0]), Number(objData.date_of_birth.split("-")[1]), Number(objData.date_of_birth.split("-")[2]));
    // console.log(objData.date_of_birth)
    this.productForm.setValue({
      productName: objData.product_name,
      category: objData.product_category,
      description: objData.product_description,
      unitsAvailable: objData.units_available,
      height: objData.height,
      width: objData.width,
      price: objData.price,
      rating: objData.rating,
      

    });
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
  deleteProduct() {
    this.dS.deleteCustomerData(this.productForm.value.Id).subscribe();
    this.modalService.dismissAll()
  }
}
