import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  course: BehaviorSubject<[]> = new BehaviorSubject<[]>([]);
 BASIC_URL = 'http://localhost:8080/company/api/';
  constructor(private http: HttpClient) {}

  postCourse(res) {
    return this.http
      .post(  this.BASIC_URL+'saveCourse', res,
      {responseType: 'text'})
      .pipe(
        catchError((err) => {
          console.log(err);
          return throwError(err);
        })
      );
  }
  deleteCourse(id){
    return this.http.delete(`${this.BASIC_URL}course/${id}`,{responseType: 'text'});
  }
}
