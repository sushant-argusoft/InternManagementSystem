import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { CourseService } from '../../service/course.service';

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

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    this.courses = this.route.snapshot.data['data'];
    this.appService.searchWordSub.subscribe((res) => {
      this.searchWord = res;
    });
  }

  getSize(i) {
    return (<[]>this.courses[i]['interns']).length;
  }
  onClick(i) {
    this.ind = i;
    this.edit = true;
    this.courseService.course.next(this.courses[i]);
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
