import { Injectable } from "@angular/core";
import {HttpClient , HttpHeaders} from '@angular/common/http'

@Injectable({providedIn:"root"})
export class AppService{
headers;
authenticated = false;
constructor(private http : HttpClient){}

authenticate(crendentials, callback){
 this.headers = new HttpHeaders(crendentials?{
    authorization: 'Basic ' + (crendentials.username+':'+crendentials.password)
}:{});

this.http.get('user',{headers: this.headers}).subscribe(
response=>{
    if(response['name'])
    this.authenticated = true;
    else 
    this.authenticated = false;
    return callback && callback();
});
}


}