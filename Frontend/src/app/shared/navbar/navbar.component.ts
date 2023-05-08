import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
header : any;
constructor(private router : Router,private route: ActivatedRoute){}
  ngOnInit(): void {
    this.header = this.route.snapshot.routeConfig.path;
    this.header = this.header.charAt(0).toUpperCase()+ this.header.slice(1);    
    console.log(window.innerWidth);
  }
sidebarToggle(){}


}
