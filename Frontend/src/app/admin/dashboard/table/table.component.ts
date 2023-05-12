import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
  ngOnInit(): void {
    sessionStorage.getItem('sessionId');
   this.data =  this.http.get<any>('http://localhost:8080/company/api/getIntern').subscribe(
      res=>{
        if(res){this.data = res;  console.log('Intern: ',this.data);}
        else {alert("Failed to query list.");}
      },

    );
    console.log(this.data);
    // for(const intern of this.data){
      
    //   const store = {
    //     "Id": intern.internId,
    //     "Name": [intern.person.firstName,intern.person.lastName].join(" "),
    //     "Mentor": [intern.mentor.person.firstName,intern.mentor.person.lastName].join(" "),
    //     "Courses": intern.courses.size(),
    //     "Progress":0
    //   }
    //   console.log(store);
    //   this.interns.push(store);

    // }
    
  
    
  }

}
