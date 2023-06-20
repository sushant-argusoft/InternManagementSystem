import { Component, OnInit } from '@angular/core';
import Person from 'src/app/model/person.model';
import { AppService } from 'src/app/service/app.service';
import * as bcrypt from 'bcryptjs';
import { transformWithEsbuild } from 'vite';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  person: Person = {
    firstName: '',
    address: {},

    dateOfBirth: '',
    email: '',

    id: 0,
    lastName: '',
    password: '',
    role: '',
    status: 'active',
  };
  mentors;
  mentorId;
  constructor(private appService: AppService) {}

  ngOnInit(): void {
   this.appService.getRemainingMentors().subscribe(res=>{
    console.log(res);
    this.mentors = res;
    
   })


  }
  onSubmit() {
    const mentor = {
      mentorId: 0,
      person: this.person,
      intern: [],
    };
    this.appService.saveMentor(mentor).subscribe((res) => console.log(res));
  }
}
