import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/service/app.service';
import Intern from 'src/app/model/intern.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  data: Intern[];
  internCount: number;
  employeeCount: number;
  revenue: number;
  edit = false;
  view = false;
  interns = [];
  category = ['Id', 'Name', 'Mentor', 'Number of Courses', 'Progress'];
  searchWord;
  pageSize = 3;
  totalSize;
  index = 0;

  sliceInternList;
  mentors: [];
  newMentor;

  constructor(private http: HttpClient, private appService: AppService) {}
  ngOnInit() {
    this.appService.getIntern().subscribe((resp) => {
      this.data = resp;
      this.totalSize = this.data.length;
      console.log('table : ',this.data);
      this.setdata();
      this.sliceInternList = this.sliceList;
    });
    this.appService.searchWordSub.subscribe((res) => {
      this.searchWord = res;
    });
    this.appService.getAllMentors().subscribe((res) => {
      console.log(res);
      this.mentors = res;
    });
  }
  setdata() {
    this.revenue = this.numberWithCommas(500000);
    for (const intern of this.data) {
      // console.log(intern);
      const store = {
        Id: intern.internId,
        Name: intern.person['firstName'],
        Mentor: intern.mentor['person']['firstName'],
        Courses: intern.courses.length,
        Progress: intern.courses.length * 10,
      };

      this.interns.push(store);
      this.internCount = this.data.length;
      this.employeeCount = this.internCount * 2;
    }
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  onClick(e) {
    this.view = true;
  }
  onDblClick(e) {
    this.edit = true;
  }
  onBlur() {
    this.view = false;
    this.edit = false;
  }
  componentStyle() {
    if (this.view) {
      return {
        borderColor: 'red',
        borderStyle: 'dashed',
        borderWidth: '2px',
      };
    }
    return {};
  }

  onChange(e) {
    this.index = +e.index;
    this.pageSize = +e.pageSize;
    this.sliceInternList = this.sliceList;
  }
  get sliceList() {
    const startIndex = this.index * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    console.log(startIndex, endIndex);

    return this.interns.slice(startIndex, endIndex).slice();
  }
  onOptionClick(i) {
    if (this.newMentor) {
      this.data[i].mentor = this.newMentor;
      this.appService
      .postIntern(this.data[i].internId, this.newMentor.mentorId)
      .subscribe((res) => {
        console.log(res);
      });
    }
    this.edit = false;
  
  }
  saveCode(e) {
    this.newMentor = this.mentors.find(
      (el) =>
        el['person']['firstName'] + ' ' + el['person']['lastName'] ===
        e.target.value
    );
  }
}
