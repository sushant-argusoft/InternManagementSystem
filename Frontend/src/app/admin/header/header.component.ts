import { Component } from '@angular/core';
import { AppService } from 'src/app/service/app.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {



  constructor(private appService :AppService){}

logout(){
  this.appService.logout();
}
  
}
