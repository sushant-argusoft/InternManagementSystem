import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-intern-list',
  templateUrl: './intern-list.component.html',
  styleUrls: ['./intern-list.component.css']
})
export class InternListComponent implements OnInit{


@Input() internsList ;
constructor(){

}

ngOnInit(): void {
 console.log(this.internsList);
}



}
