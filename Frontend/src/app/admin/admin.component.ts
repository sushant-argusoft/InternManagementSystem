import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get<any>('/company/getIntern').subscribe(
      res=>{
        if(res){console.log('Intern: ',res);}
        else {alert("Failed to query list.");}
      }
    );
  }

}
