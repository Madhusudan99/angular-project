import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder,  Validators, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  myForm:any;
  ngOnInit(): void {

    this.myForm = this.fb.group({
      FirstName:['',Validators.required],
      LastName: ['', Validators.required],
      Birthdate: ['', Validators.required],
      CurrentAddress: ['', Validators.required],
      CurrenthouseNo: ['', Validators.required],
      CurrentCity: ['', Validators.required],
      CurrentState:[ '', Validators.required],
      CurrentZip:['',Validators.required],
      ParmanentAddress: ['', Validators.required],
      ParmanenthouseNo: ['', Validators.required],
      ParmanentCity: ['', Validators.required],
      ParmanentState: ['', Validators.required],
      ParmanentZip:[ '', Validators.required],
      Email:[ '', [Validators.required,Validators.email]],
      PhoneNumber:[ '', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
    });
  }

  CustomerFormData()
  {

  }
}
