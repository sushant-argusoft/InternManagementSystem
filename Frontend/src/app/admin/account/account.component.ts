import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Person from 'src/app/model/person.model';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  person;
  accountForm: FormGroup;
  constructor(private appService: AppService) {}
  ngOnInit(): void {
    // this.person = JSON.parse(localStorage.getItem('person'));
    // console.log(this.person);
    this.appService.getPerson(sessionStorage.getItem('email')).subscribe(
      res=>{this.person = res;
   

    this.accountForm = new FormGroup({
      firstName: new FormControl(this.person.firstName, Validators.required),
      lastName: new FormControl(this.person.lastName, Validators.required),
      dateOfBirth: new FormControl(this.person.dateOfBirth, [
        Validators.required,
        Validators.pattern('[0-9]{4}-[0-9]{2}-[0-9]{2}'),
      ]),
      email: new FormControl(this.person.email, Validators.required),
      cityName: new FormControl(
        this.person.address.cityName,
        Validators.required
      ),
      countryName: new FormControl(
        this.person.address.countryName,
        Validators.required
      ),
      pincode: new FormControl(
        this.person.address.pinCode,
        Validators.required
      ),
      streetName: new FormControl(
        this.person.address.streetName,
        Validators.required
      ),
      streetNumber: new FormControl(
        this.person.address.streetNumber,
        Validators.required
      ),
      houseNumber: new FormControl(
        this.person.address.houseNumber,
        Validators.required
      ),
    });
      }
    )

  }
  onSubmit() {
    this.person.firstName = this.accountForm.get('firstName').value;
    this.person.lastName = this.accountForm.get('lastName').value;
    this.person.dateOfBirth = this.accountForm.get('dateOfBirth').value;
    this.person.email = this.accountForm.get('email').value;
    this.person.address.cityName = this.accountForm.get('cityName').value;
    this.person.address.countryName = this.accountForm.get('countryName').value;
    this.person.address.pincode = this.accountForm.get('pincode').value;
    this.person.address.streetName = this.accountForm.get('streetName').value;
    this.person.address.streetNumber =
      this.accountForm.get('streetNumber').value;
    this.person.address.houseNumber = this.accountForm.get('houseNumber').value;


    console.log(this.person);

    this.appService.postPerson(this.person).subscribe((res) => {
      console.log(res);
    });
  }
}
