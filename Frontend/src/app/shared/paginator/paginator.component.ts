import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit{

  @Input() totalSize:number;
  @Input() pageSize:number;
  totalPages;
  index = 0;
  @Output() change = new EventEmitter<number>();
  ngOnInit(): void {
  this.totalPages = (this.totalSize/this.pageSize)+((this.totalSize%this.pageSize)>0?1:0);
  this.change.emit(this.index);
  }

  onIncrease(){
    this.index++;
    this.index = this.index%this.totalPages;
    this.change.emit(this.index);
  }
  onDecrease(){
    this.index--;
    this.index = (this.index+this.totalPages)%this.totalPages;
    this.change.emit(this.index);
  }
  onEntry(i){
    this.index = i;
    this.change.emit(this.index);
  }

}

