import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() colHeader: any;
  @Input() tableData: any;
  @Input() notEmptyPost: any;
  @Input() notscrolly: any;
  @Output() nextpost = new EventEmitter<boolean>();

  constructor() {}

  spinnershow: boolean = true;

  onScroll() {
    setTimeout(() => {
      console.log('Event Emiited====>>>');
      this.nextpost.emit();
    }, 1000);
  }
}
