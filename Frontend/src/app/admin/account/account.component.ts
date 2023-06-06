import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Person from 'src/app/model/person.model';
import { AppService } from 'src/app/service/app.service';
/*
cityName
: 
"Lucknow"
countryName
: 
"India"
houseNumber
: 
1
id
: 
1
pinCode
: 
101010
streetName
: 
"wolf street"
streetNumber
: 
1*/
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{
  person: Person;
  accountForm: FormGroup;
  constructor(private appService : AppService){}
  ngOnInit(): void {
    this.person = this.appService.person;
    console.log(this.person);
    
    this.accountForm = new FormGroup({
      'firstName': new FormControl(this.person.firstName, Validators.required),
      'lastName': new FormControl(this.person.lastName, Validators.required),
      'dateOfBirth': new FormControl(this.person.dateOfBirth, [Validators.required,Validators.pattern("[0-9]{4}-[0-9]{2}-[0-9]{2}")]),
      'email': new FormControl(this.person.email, Validators.required),
      'cityName': new FormControl(this.person.address.cityName, Validators.required),
      'countryName': new FormControl(this.person.address.countryName, Validators.required),
      'pincode': new FormControl(this.person.address.pinCode, Validators.required),
      'streetName': new FormControl(this.person.address.streetName, Validators.required),
      'streetNumber': new FormControl(this.person.address.streetNumber, Validators.required),
      'houseNumber': new FormControl(this.person.address.houseNumber, Validators.required),
    });
  
    

    

  }
  onSubmit(){
   
    
  }

}
