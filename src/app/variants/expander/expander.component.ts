import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['../common.scss']
})
export class ExpanderComponent implements OnInit {
  @Input() title: string;
  @Input() summary: string;
  @Input() content: string;
  @Input() icon: string;

  @Output() public testString = new EventEmitter<string>();

  private expanded: boolean;

  constructor() {}

  ngOnInit() {
    this.expanded = false;
  }
  exampleMethod() {
    this.testString.emit(' A test thing');
  }
  expand() {
    if (this.icon === 'expand_more') {
      this.expanded = true;
      this.icon = 'expand_less';
    } else {
      this.expanded = false;
      this.icon = 'expand_more';
    }
  }
}
