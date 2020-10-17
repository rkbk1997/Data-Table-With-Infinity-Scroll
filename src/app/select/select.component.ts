import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() searchItemList: any;
  @Input() value: any;
  @Output() getfilter = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  findvalue(e){
    let filterobject ={
      key:this.searchItemList.topic,
      value:e.target.value
    }
    this.getfilter.emit(filterobject)
  }
}
