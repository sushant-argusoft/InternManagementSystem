import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent implements OnInit {
  @Input() totalSize: number;
  @Input() pageSize: number;
  totalPages;
  currentPage = 1;
  pageSizeTemp;

  index = 0;
  @Output() change = new EventEmitter<{}>();
  ngOnInit(): void {
    this.pageSizeTemp = this.pageSize;

    this.totalPages = Math.ceil(this.totalSize / this.pageSizeTemp);

    this.change.emit({ index: this.index, pageSize: this.pageSize });
  }

  onIncrease() {
    this.index++;

    this.index = this.index % this.totalPages;
    this.currentPage = this.index + 1;
    this.change.emit({ index: this.index, pageSize: this.pageSizeTemp });
  }
  onDecrease() {
    this.index--;

    this.index = (this.index + this.totalPages) % this.totalPages;
    this.currentPage = this.index + 1;
    this.change.emit({ index: this.index, pageSize: this.pageSizeTemp });
  }
  onEntry() {
    this.index = this.currentPage - 1;

    this.change.emit({ index: this.index, pageSize: this.pageSizeTemp });
  }
  valueChange(e) {
    if (this.pageSizeTemp > this.totalSize) this.pageSize = this.totalSize;
    console.log(this.pageSizeTemp);
    this.totalPages = Math.ceil(this.totalSize / this.pageSizeTemp);
    this.change.emit({ index: this.index, pageSize: this.pageSizeTemp });
  }
}
