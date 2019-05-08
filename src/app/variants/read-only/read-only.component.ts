import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-read-only',
  templateUrl: './read-only.component.html',
  styleUrls: ['../common.scss']
})
export class ReadOnlyComponent implements OnInit {
@Input() title: string;
@Input() summary: string;
@Input() content: string;

  constructor() { }

  ngOnInit() {

  }

}
