import { Component, OnInit, Input, Inject, EventEmitter, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PanelModel } from '../../Models/panel-model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
 @Output() public contentChanged = new EventEmitter();
 title: string;
 content: string;
  constructor( public dialogRef: MatDialogRef<DetailComponent>,
               @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
this.title = this.data.title;
this.content = this.data.contentData;

  }
  changeValues(value) {
    console.log(event);
    this.contentChanged.emit(value);
    this.data.contentData = value;

  }

}
