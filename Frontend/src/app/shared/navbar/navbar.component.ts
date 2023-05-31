import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
header : any;
check;

constructor(private router : Router,private route: ActivatedRoute,private appService : AppService){}
  ngOnInit(): void {
    this.header = this.route.snapshot.routeConfig.path;
    console.log();
    this.header = this.header.charAt(0).toUpperCase()+ this.header.slice(1);  
    this.appService.isChecked.subscribe((res)=>{      
      this.check = res;
    })  
 
  }

switchTheme(e) {
  if (e.target.checked) {

    this.appService.isChecked.next(true);
      document.documentElement.setAttribute('data-theme', 'dark');
  }
  else {
    this.appService.isChecked.next(false);
      document.documentElement.setAttribute('data-theme', 'light');
  }    
}


}
