import { Component, ElementRef, HostBinding, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  @ViewChild('modalContent') modalContent: ElementRef;
  formGroup:FormGroup;
  isSubmitted= false;
  /*
  category
: 
{id: 1, categoryName: 'Database'}
company
: 
{id: 1, name: 'Argusoft', address: {…}}
courseName
: 
"Realtional Database Design"
id
: 
1
imageUrl
: 
"https://png.pngtree.com/png-clipart/20210308/original/pngtree-online-course-online-teaching-vector-png-image_5780237.jpg"
interns
: 
(2) [{…}, {…}]
  */ 
 constructor(private courseService: CourseService, private router : Router , private route: ActivatedRoute){}

// @HostListener('document: click' , ['$event']) routeBack(event:Event){
//   console.log(this.modalContent.nativeElement);
  
// if(!this.modalContent.nativeElement.contains(event.target)){
//   this.close();
// }
// }


ngOnInit(): void {


  
//let name =this.inpCourse["courseName"];

let courseName='';
let category='';


let imageUrl='';
let interns:[];
this.courseService.course.subscribe((res)=>{
  console.log(res);
  courseName = res["courseName"];
  category = res["category"]["categoryName"];
  imageUrl= res["imageUrl"];
  console.log(category);
  
});


  this.formGroup = new FormGroup({
    
    'courseName': new FormControl(courseName, Validators.required),
    'imagePath': new FormControl(imageUrl,Validators.required),

    'category': new FormControl(category,Validators.required),
    
    
   });
 }
 

 onSubmit(){
   this.isSubmitted = true;
 }
 close(){
 this.router.navigate(["../"],{relativeTo: this.route})
 }
 toggler(e){
   if(!this.modalContent.nativeElement.contains(e.target)){
    this.close();
   }
 }

}
