import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  @Input() name: any;
  @Input() value: any;
  @Input() placeholder: any;
  @Output() getfilter = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  findvalue(e){
    let filterobject ={
      key:this.name,
      value:e.target.value
    }
    this.getfilter.emit(filterobject)
  }

}
