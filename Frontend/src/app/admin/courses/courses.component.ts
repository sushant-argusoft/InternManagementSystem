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

  size: number;
  courses: [];
  ind = -1;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    this.courses = this.route.snapshot.data['data'];
  }

  getSize(i) {
    return (<[]>this.courses[i]['interns']).length;
  }
  onClick(i) {
    this.ind = i;
    this.edit = true;
    this.courseService.course.next(this.courses[i]);
  }
  internDetails() {}
}
