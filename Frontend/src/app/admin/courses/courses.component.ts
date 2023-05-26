import { Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{

size:number;
courses:[];

constructor(private appService: AppService, private route : ActivatedRoute){

}
  
 


ngOnInit(){
    
  this.courses =  this.route.snapshot.data['data'];

  console.log(this.route.snapshot.data['data']);
  }

  getSize(i){
    
    return (<[]>this.courses[i]['interns']).length;
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

}
