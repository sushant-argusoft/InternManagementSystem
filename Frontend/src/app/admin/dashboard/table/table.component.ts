import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom, retry } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  data;
  
  interns=[];
  category=['Id', 'Name' , 'Mentor' , 'Number of Courses', 'Progress'];
  
  constructor(private http:HttpClient){}
   async ngOnInit() {
    

    this.data = await this.getData('http://localhost:8080/company/api/getIntern');
  
    for(const intern of this.data){

      console.log(intern);
      const store = {
        "Id": intern.internId,
        "Name": [intern.person.firstName,intern.person.lastName].join(" "),
        "Mentor": [intern.mentor.person.firstName,intern.mentor.person.lastName].join(" "),
        "Courses": intern.courses.length,
        "Progress": intern.courses.length*10
      }
      console.log(store);
      this.interns.push(store);

    }
    
  
    
  }
 async  getData(url){
    return  await this.http.get(url).toPromise();
  }

}
