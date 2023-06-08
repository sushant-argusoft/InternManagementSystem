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
  pageSize = 3;
  totalSize;
  index = 0;

  constructor(private appService: AppService) {}
  ngOnInit(): void {
    this.appService.getAllPersons().subscribe((res) => {
      this.persons = res;
      console.log(this.persons);
      this.totalSize = this.persons.length;
    });
    this.appService.searchWordSub.subscribe((res) => {
      this.searchword = res;
    });
  }

  sortList(v) {
    this.toggler = -1 * this.toggler;

    this.persons.sort((a, b) => {
      return a[v] > b[v] ? this.toggler : -this.toggler;
    });
  }
  onChange(e){
    this.index = +e.index;
    this.pageSize = +e.pageSize;
    console.log(this.pageSize)
  }


  get sliceList(){
    
    const startIndex = this.index*this.pageSize;
    const endIndex = startIndex+this.pageSize;
    console.log(startIndex,endIndex);
    
    return this.persons.slice(startIndex, endIndex);
  }
}
