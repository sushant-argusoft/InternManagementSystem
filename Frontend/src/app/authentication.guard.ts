import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,  Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard {
  
  constructor(private router : Router,private appService : AppService){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(state.url == "/login"){
      sessionStorage.clear();
      
      
    return true;}
    let token = sessionStorage.getItem('sessionId');
    if(!token)
      return this.router.parseUrl('/login');
    return true;
  }
  
}
