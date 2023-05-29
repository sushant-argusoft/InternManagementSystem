import { Component,ElementRef,OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { CourseService } from './course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  edit= false;

size:number;
courses:[];
ind=-1;


constructor(private appService: AppService, private route : ActivatedRoute,private router : Router, private courseService : CourseService){

}
  
 


ngOnInit(){
    
  this.courses =  this.route.snapshot.data['data'];

  console.log(this.route.snapshot.data['data']);
  }

  getSize(i){
    
    return (<[]>this.courses[i]['interns']).length;
  }
  onClick(i){
    this.ind = i;
    this.edit = true;
    this.courseService.course.next(this.courses[i]);
   this.router.navigate(['edit'],{relativeTo: this.route})
  
    
    
    // this.foobar.nativeElement.inpCourse = this.courses[i];
    
    // console.log(this.ind);
  }
  // setCourses(res){
  //   this.courses = res;
  //   console.log(this.courses);
    
  // }
  // increaseIndex(){
  //   const res = this.ind;
  //   this.ind++;
  //   return res;
  // }
  // getColumn(row){
  //   if(row == (this.row-1) ){ return this.size%this.column;}
  //   return 4;

  // }
  // activate(comp){
  //   comp.inpCourse = this.courses[this.ind];
  //   console.log(this.ind);
  //   console.log(comp);

  // }
  internDetails(){
    
  }
  
}
