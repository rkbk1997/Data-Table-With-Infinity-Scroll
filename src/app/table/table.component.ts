import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { ApiService } from '../api.service';
import { TableconfigService } from './tableconfig.service';

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
  @Input() notMorePost: any;
  @Input() showspinner: any;
  @Output() nextpost = new EventEmitter<boolean>();
  @Output() increment_sort = new EventEmitter<any>();
  @Output() decrement_sort = new EventEmitter<any>();
  @Input() templateRef: TemplateRef<any>;
  @Input() DeletetemplateRef: TemplateRef<any>;

  constructor(private api:ApiService, private tableService : TableconfigService ) {}

  editreacord:any;

  onScroll() {
    setTimeout(() => {
      this.nextpost.emit();
    }, 1000);
  }

  incrementsort(key){
    this.increment_sort.emit(key);
  }

  decrementsort(key){
    this.decrement_sort.emit(key);
  }

  getRowData(id){
    this.api.findrecord(id).subscribe(
      res => this.editreacord = res,
    )

  }

}
