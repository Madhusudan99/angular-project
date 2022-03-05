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
  cleanedFormData:any;
  emptyForm = {
    "id" : Math.floor(Math.random() * 10000),
    "product_name": "",
    "product_category": "",
    "product_description": "",
    "units_available": "",
      "height": "",
      "width": "",
      "price": "",
      "rating": ""
  }


  addToProductList(data: any) {
    this.productList = data;
    console.log(this.productList)
  }
  ngOnInit(): void {
    this.dS.getProductData().subscribe((data) => this.addToProductList(data));
    console.log("pL", this.productList)
    this.productForm = this.fb.group({
      id:[''],
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

  updateProductFormData(){
      console.log(this.productForm.value);
      // console.log(this.productForm.value.id);
    this.cleanedFormData = {
      "id": this.productForm.value.id,
      "product_name": this.productForm.value.product_name,
    "product_category": this.productForm.value.product_category,
      "product_description": this.productForm.value.product_description,
      "units_available": this.productForm.value.units_available,
      "height": this.productForm.value.height,
      "width": this.productForm.value.width,
    "price": this.productForm.value.price,
    "rating": this.productForm.value.rating
    }

    console.log(this.cleanedFormData);

    this.dS.putProductData(this.cleanedFormData).subscribe((data) => console.log(data));
  }

  postProductFormData() {

    console.log(this.productForm.value);
      // console.log(this.productForm.value.id);
    this.cleanedFormData = {
      "id": this.productForm.value.id,
      "product_name": this.productForm.value.product_name,
    "product_category": this.productForm.value.product_category,
      "product_description": this.productForm.value.product_description,
      "units_available": this.productForm.value.units_available,
      "height": this.productForm.value.height,
      "width": this.productForm.value.width,
    "price": this.productForm.value.price,
    "rating": this.productForm.value.rating
    }

    console.log(this.cleanedFormData);

    this.dS.postProductData(this.cleanedFormData).subscribe((data) => console.log(data));


  }
  objectToFormData(objData: any) {
    this.productForm.setValue({
      id: objData.id,
      product_name: objData.product_name,
      product_category: objData.product_category,
      product_description: objData.product_description,
      units_available: objData.units_available,
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
    this.dS.deleteProductData(this.productForm.value.id).subscribe();
    this.modalService.dismissAll()
  }
}