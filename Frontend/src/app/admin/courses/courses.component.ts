import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{

constructor(private appService: AppService){}


  ngOnInit(): void {
    this.appService.getCourses().subscribe((res)=>{
      console.log(res);
    })
   
  }

}
