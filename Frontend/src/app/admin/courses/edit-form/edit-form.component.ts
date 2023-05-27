import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
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
 constructor(private router : Router , private route: ActivatedRoute){}
@Input() inpCourse;

formGroup:FormGroup;
isSubmitted= false;
ngOnInit(): void {
  console.log(this.inpCourse);
  
//let name =this.inpCourse["courseName"];

let courseName='';
let category='';


let imageUrl='';
let interns:[];


  this.formGroup = new FormGroup({
    'name': new FormControl(name, Validators.required),
    'courseName': new FormControl(courseName, Validators.required),
    'imagePath': new FormControl(imageUrl,Validators.required),
    'category': new FormControl(category,Validators.required),
    'interns': new FormControl(interns,Validators.required),
    
   });
 }

 onSubmit(){
   this.isSubmitted = true;
 }
 close(){
 this.router.navigate(["../"],{relativeTo: this.route})
 }

}
