import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import Intern from "../model/intern.model";
import { BehaviorSubject } from "rxjs";
import axios from "axios";
import { Router } from "@angular/router";

@Injectable({providedIn:'root'})
export class AppService {
  
    isChecked: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    searchWordSub: BehaviorSubject<string> = new BehaviorSubject<string>('');
    BASIC_URL = 'http://localhost:8080/company/';


    constructor (private http : HttpClient, private router: Router){
       
    }
    async login(model){
      try{
      const data=await axios.post(this.BASIC_URL + "login",{username:model.username,password:model.password})
      
      sessionStorage.setItem("sessionId",data.data.sessionId)
    
      this.router.navigate(['../admin'])
      }
      catch(err){
        console.log(err.message)
      }
    }
    logout(){
      sessionStorage.clear();
  
      

      this.router.navigate(['../login'])

    }
    getIntern(){
       return this.http.get<Intern[]>(this.BASIC_URL+'api/getIntern')
            
    //    console.log("Set",this.intern);
       
    }

    getCourses(){
      return this.http.get<[]>(this.BASIC_URL+'api/getCourse')
    }
    getCategory(){
      return this.http.get<[]>(this.BASIC_URL+'api/getCategory')

    }
  

  
     
        

       







}