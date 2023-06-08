import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../../service/course.service';
import { AppService } from 'src/app/service/app.service';
import {
  NgbActiveModal,
  NgbModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
})
export class EditFormComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  isSubmitted = false;
  allCatogories;
  courseName: '';
  category: '';
  imageUrl: '';
  loading: boolean = false;

  @Input() course: any;

  constructor(
    private ngbActiveModal: NgbActiveModal,
    private courseService: CourseService,
    private appService: AppService
  ) {}
  ngOnDestroy(): void {
    this.courseService.course.unsubscribe();
  }

  ngOnInit(): void {
    console.log(this.course);

    this.appService.getCategory().subscribe((res) => {
      this.allCatogories = res;
    });

    this.formGroup = new FormGroup({
      courseName: new FormControl(this.course.courseName, Validators.required),
      imagePath: new FormControl(this.course.imageUrl, Validators.required),
      category: new FormControl(this.course.category.id, Validators.required),
    });
  }

  editFormControls() {
    return this.formGroup.controls;
  }

  onSubmit() {
    if (!this.formGroup.valid) return;
    this.close();
    let formValues = this.formGroup.value;
    // console.log(formValues);

    this.loading = true;

    console.log(this.course);
    const sendObj = {
      courseId: this.course.id,
      courseName: formValues.courseName,
      imageUrl: formValues.imagePath,
      cId: formValues.category,
      companyId: this.course.company.id,
      interns: this.course.interns.map((el) => el.internId),
    };
    console.log(sendObj);

    this.courseService.postCourse(sendObj).subscribe(
      (res) => {
        this.loading = false;
        this.isSubmitted = true;
        this.course.courseName = formValues.courseName;
        this.course.imageUrl = formValues.imagePath;
        this.course.category = this.allCatogories.filter(
          (el) => {
            
            
            return el.id ==formValues.category}
        );
        console.log(this.course);
        
      },
      (err) => {
        this.isSubmitted = false;
      }
    );
  }
  close() {
    this.ngbActiveModal.close();
    // this.isSubmitted = false;
  }

  changeCategory(e) {
    this.formGroup.get('category').setValue(e.target.value, { onlySelf: true });
  }
}
