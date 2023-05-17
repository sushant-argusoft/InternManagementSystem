import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from "axios"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  sessionId: any = "";

  constructor(
      private router: Router,
      private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

//   login() {
//     let url = 'http://localhost:8080/company/login';
//     this.http.post<any>(url, {
//       username: this.model.username,
//       password: this.model.password
//     }).subscribe(res => {
//       if (res) {
//         this.sessionId = res.sessionId;
          
//         sessionStorage.setItem(
//           'token',
//           this.sessionId
//         );
//         this.router.navigate(['']);
//       } else {
//           alert("Authentication failed.")
//       }
//     },error=>console.log("error ",error.message));
// }

async login(){
  try{
  const data=await axios.post("http://localhost:8080/company/login",{username:this.model.username,password:this.model.password})
  
  sessionStorage.setItem("sessionId",data.data.sessionId)
  this.router.navigate(['../admin'])
  }
  catch(err){
    console.log(err.message)
  }
}
}
