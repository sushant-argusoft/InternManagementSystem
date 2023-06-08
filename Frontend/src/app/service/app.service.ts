import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Intern from '../model/intern.model';
import { BehaviorSubject, catchError, throwError } from 'rxjs';
import axios from 'axios';
import { Router } from '@angular/router';
import Person from '../model/person.model';

@Injectable({ providedIn: 'root' })
export class AppService {
  isChecked: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  searchWordSub: BehaviorSubject<string> = new BehaviorSubject<string>('');
  BASIC_URL = 'http://localhost:8080/company/';
  person: Person;

  constructor(private http: HttpClient, private router: Router) {}
  async login(model) {
    try {
      const data = await axios.post(this.BASIC_URL + 'login', {
        username: model.username,
        password: model.password,
      });
      sessionStorage.setItem('sessionId', data.data.sessionId);
      sessionStorage.setItem('email',model.username);
      
      this.getPerson(model.username).subscribe((res) => {
        this.person = new Person(
          res['id'],
          res['firstName'],
          res['lastName'],
          res['dateOfBirth'],
          res['email'],
          res['password'],
          res['role'],
          res['address'],
          res['status']
        );

        localStorage.setItem('person', JSON.stringify(this.person));
      });

      this.router.navigate(['../admin/dashboard']);
    } catch (err) {
      console.log(err.message);
    }
  }
  logout() {
    sessionStorage.clear();
    localStorage.clear();

    this.router.navigate(['../login']);
  }
  getIntern() {
    return this.http.get<Intern[]>(this.BASIC_URL + 'api/getIntern');

    //    console.log("Set",this.intern);
  }

  getCourses() {
    return this.http.get<[]>(this.BASIC_URL + 'api/getCourse');
  }
  getCategory() {
    return this.http.get<[]>(this.BASIC_URL + 'api/getCategory');
  }

  getPerson(email) {
    return this.http.get<[]>(this.BASIC_URL + 'api/getPerson/' + email);
  }
  postPerson(person: Person) {
    return this.http
      .post(`${this.BASIC_URL}api/person`, person,
      {
        observe: 'body', responseType: 'text'
      })
      .pipe(
        catchError((err) => {
          console.log(err);
          return throwError(err);
        })
      );
  }

  getAllPersons(){
   return this.http.get<[]>(this.BASIC_URL+'api/getPerson');
  }
}
