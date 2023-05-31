import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';

import { AppService } from '../service/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  sessionId: any = "";

  constructor(
    private appService : AppService
   
  ) { }

  ngOnInit(): void {
     
    document.documentElement.setAttribute('data-theme', 'light');
    this.appService.isChecked.next(false);
    
     
  }
login(){
  this.appService.login(this.model);
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


}
