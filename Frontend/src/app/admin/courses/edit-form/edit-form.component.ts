import { Component, ElementRef, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../../service/course.service';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
})
export class EditFormComponent implements OnInit,OnDestroy{
  formGroup: FormGroup;
  isSubmitted = false;
  allCatogories;
  courseName: '';
  category: '';
  imageUrl: '';
  course;
  loading: boolean = false;
  @ViewChild('modalContent')modalClose:ElementRef;

  constructor(
    private courseService: CourseService,
    private appService: AppService
  ) {}
  ngOnDestroy(): void {
    this.courseService.course.unsubscribe();
    
  }

  ngOnInit(): void {
   
    this.appService.getCategory().subscribe((res) => {
      this.allCatogories = res;
    });

    this.courseService.course.subscribe((res) => {
      this.course = res;
      console.log(res['courseName']);
      this.setData(res);
    });
    this.formGroup = new FormGroup({
      courseName: new FormControl('', Validators.required),
      imagePath: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.loading = true;
    const respCourseName = this.formGroup.get('courseName').value;
    const respImageUrl = this.formGroup.get('imagePath').value;
    const tempCategory = this.formGroup
      .get('category')
      .value.slice(this.formGroup.get('category').value.indexOf(':') + 1)
      .trim();
    const respCategory = this.allCatogories.find(
      (el) => el.categoryName === tempCategory
    );

    this.course.courseName = respCourseName;
    this.course.imageUrl = respImageUrl;
    this.course.category = respCategory;

    console.log(this.course);
    const sendObj = {
      courseId: this.course.id,
      courseName: respCourseName,
      imageUrl: this.course.imageUrl,
      cId: this.course.category.id,
      companyId: this.course.company.id,
      interns: this.course.interns.map((el) => el.internId),
    };
    console.log(sendObj);

    this.courseService.postCourse(sendObj).subscribe(
      (res) => {
        this.loading = false;
        this.isSubmitted = true;
      },
      (err) => {
        this.isSubmitted = false;
      }
    );
  }
  close(){
    this.isSubmitted = false;
  }
  modalCloseFn(e){
    if(this.modalClose.nativeElement.contains(e.target)){
      this.close();
    }
  }

  setData(res) {
    this.formGroup.setValue({
      courseName: res['courseName'],
      imagePath: res['imageUrl'],
      category: res['category']['categoryName'],
    });
  }
  changeCategory(e) {
    this.formGroup.get('category').setValue(e.target.value, { onlySelf: true });
  }
}
