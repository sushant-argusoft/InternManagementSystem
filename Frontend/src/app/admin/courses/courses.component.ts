import { AfterContentInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit,OnChanges{
row: number ;
column: number;
size:number;
courses:[];
ind:number=0;
constructor(private appService: AppService, private route : ActivatedRoute){

  this.courses = this.route.snapshot.data['data'];
}
  ngOnChanges(changes: SimpleChanges): void {
    this.courses = this.route.snapshot.data['data'];
  }
 


 async ngOnInit(){
    
   
  }
  setCourses(res){
    this.courses = res;
    console.log(this.courses);
    
  }
  increaseIndex(){
    const res = this.ind;
    this.ind++;
    return res;
  }
  getColumn(row){
    if(row == (this.row-1) ){ return this.size%this.column;}
    return 4;

  }

}
