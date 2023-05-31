import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  course: BehaviorSubject<[]> = new BehaviorSubject<[]>([]);

  constructor(private http: HttpClient) {}

  postCourse(res) {
    return this.http
      .post('http://localhost:8080/company/api/saveCourse', res,
      {responseType: 'text'})
      .pipe(
        catchError((err) => {
          console.log(err);
          return throwError(err);
        })
      );
  }
}
