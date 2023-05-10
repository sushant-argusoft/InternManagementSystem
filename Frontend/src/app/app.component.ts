import { Component, OnInit } from '@angular/core';
import { Injectable } from "@angular/core";
import {HttpClient , HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private http: HttpClient){}

  ngOnInit(): void {
//     this.http.get('http://localhost:8080',{headers:new HttpHeaders({
//       authorization: 'Basic ' + ('user1'+':'+'user1')
//   })
// }).subscribe(data=>{console.log(data)});
  }

}
