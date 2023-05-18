import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import Intern from "./model/intern.model";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn:'root'})
export class AppService {
    private intern:Intern[];
    myIntern: BehaviorSubject<Intern[]> = new BehaviorSubject<Intern[]>([]);

    constructor (private http : HttpClient){
       
    }
    setIntern(){
       return this.http.get<Intern[]>('http://localhost:8080/company/api/getIntern')
            
    //    console.log("Set",this.intern);
       
    }
  

      getIntern(){   
        return this.myIntern.asObservable();
      }

     
        

       







}