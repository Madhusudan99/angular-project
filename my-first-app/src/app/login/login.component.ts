import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public dS: DataService) { }
  email = "";
  password = "";


  ngOnInit(): void {
  }


  login() {
   if (this.email == "admin@mail.com" && this.password == "admin") {
     console.log("Match");
     this.dS.loggedIn = true;
   }
  }
}
