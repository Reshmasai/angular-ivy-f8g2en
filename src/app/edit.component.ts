import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-input',
  templateUrl: './edit.component.html',
  //styleUrls: ['./edit.component.scss'],
})
export class editComponent implements OnInit {
  @Input() data: number;
  @Output() focusOut: EventEmitter<number> = new EventEmitter<number>();
  currency = '$';
  editMode = false;
  constructor() {}

  ngOnInit() {}

  onFocusOut() {
    this.focusOut.emit(this.data);
  }
}
