import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
/*	ID 	NAME 
EMAIL ID 
TYPE 	DESIGNATION 	PROJECTS*/

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  persons;
  searchword;
  previousProperty;
  toggler = -1;
  
  constructor(private appService: AppService) {}
  ngOnInit(): void {
    this.appService.getAllPersons().subscribe((res) => {
      this.persons = res;
      console.log(this.persons);
    });
    this.appService.searchWordSub.subscribe((res) => {
      this.searchword = res;
    });
  }

  sortList(v) {
    this.toggler = -1*this.toggler;
    
    this.persons.sort((a, b) => {
      
      
      return a[v] > b[v] ? this.toggler :- this.toggler;
    });

  
  }
}
