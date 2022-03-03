import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  CustomerForm:any;
  ngOnInit(): void {

    this.CustomerForm = this.fb.group({
      FirstName:['',Validators.required],
      LastName: ['', Validators.required],
      CurrentAddress: ['', Validators.required],
      CurrentCity: ['', Validators.required],
      CurrentState:[ '', Validators.required],
      CurrentZip:['',Validators.required],
      ParmanentAddress: ['', Validators.required],
      ParmanentCity: ['', Validators.required],
      ParmanentState: ['', Validators.required],
      ParmanentZip:[ '', Validators.required],
      Email:[ '', [Validators.required,Validators.email]],
      PhoneNumber:[ '', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      
    });
  }

  CustomerFormData()
  {

  }
}
