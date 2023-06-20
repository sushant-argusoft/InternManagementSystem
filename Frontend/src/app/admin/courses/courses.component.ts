import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { CourseService } from '../../service/course.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EditFormComponent } from './edit-form/edit-form.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  edit = false;
  interns = [];
  size: number;
  courses: [];
  ind = -1;
  searchWord;
  ngbModalRef: NgbModalRef;
  userRole;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    // this.courses = this.route.snapshot.data['data'];
    this.userRole = localStorage.getItem('role');

    if (this.userRole === 'ROLE_MENTOR') {
      const personId = +localStorage.getItem('personId');
      this.appService.getCourseForMentor(personId).subscribe((res) => {
        this.courses = res;
      });
    }

    // this.appService.getCourseForMentor()}
    else if (this.userRole === 'ROLE_ADMIN') {
      this.appService.getCourses().subscribe((res) => {
        this.courses = res;
      });
    }
    this.appService.searchWordSub.subscribe((res) => {
      this.searchWord = res;
    });
  }

  getSize(i) {
    return (<[]>this.courses[i]['interns']).length;
  }
  onClick(i) {
    this.ngbModalRef = this.modalService.open(EditFormComponent);
    this.ngbModalRef.componentInstance.course = this.courses[i];
  }
  internDetails(i) {
    this.interns = this.courses[i]['interns'];
  }
  delete(i) {
    console.log(this.courses[i]['id']);
    this.courseService.deleteCourse(this.courses[i]['id']).subscribe((res) => {
      console.log(res),
        (err) => {
          console.log(err);
        };
    });
  }
}
