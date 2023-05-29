import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/app.service';
import Intern from 'src/app/model/intern.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  data:Intern[];
  internCount:number;
  employeeCount:number;
  revenue:number;
  
  interns=[];
  category=['Id', 'Name' , 'Mentor' , 'Number of Courses', 'Progress'];
  
  constructor(private http:HttpClient,private appService : AppService){}
    ngOnInit() {
    
     this.appService.getIntern().subscribe((resp)=>{
        this.data = resp;
        console.log(this.data);
        this.setdata();
     });
 
    
  }
  setdata()
    {  this.revenue = this.numberWithCommas(500000);
      for(const intern of this.data){

      // console.log(intern);
      const store = {
        "Id": intern.internId,
        "Name": intern.person['firstName'],
        "Mentor": intern.mentor['person']['firstName'],
        "Courses": intern.courses.length,
        "Progress": intern.courses.length*10
      }
    
      this.interns.push(store);
      this.internCount= this.data.length;
      this.employeeCount = this.internCount*2;
    }}

     numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

}
