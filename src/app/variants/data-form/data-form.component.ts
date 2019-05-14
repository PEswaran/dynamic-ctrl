import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  Inject,
  ViewChild,
  OnDestroy
} from "@angular/core";

import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { ModalComponent } from "../modal/modal.component";

import { FormGroup, FormControl } from "@angular/forms";
import { DataSet } from "src/app/Models/data-set";

@Component({
  selector: "app-data-form",
  templateUrl: "./data-form.component.html",
  styleUrls: ["./data-form.component.scss"]
})
export class DataFormComponent implements OnInit, OnDestroy {
  @Output() outputData: EventEmitter<any> = new EventEmitter<any>();
  @Input() formTitle;

  formField0;
  formField1;
  formField2;
  formField3: string;
  componentType: any;
  popOut = false;
  datas;
  content;

  model = new DataSet(
    this.formField0,
    this.formField1,
    this.formField2,
    this.formField3
  );
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.outputData.emit(this.model);
  }
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  ngOnDestroy() {
    this.outputData.emit(this.model);
   
  }

}
