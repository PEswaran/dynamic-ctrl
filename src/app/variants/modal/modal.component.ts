import {
  Component,
  OnInit,
  Input,
  ViewContainerRef,
  ApplicationRef
} from "@angular/core";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material";
import { VariantBuilderService } from "../../variant-builder.service";
import { Overlay } from "@angular/cdk/overlay";

import { DataSet } from "src/app/Models/data-set";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["../common.scss"]
})
export class ModalComponent implements OnInit {
  componentRef: any;
  formInfo: any;
  @Input() title: string;
  @Input() summary: string;
  @Input() content: string;
  @Input() icon: string;

  fileNameDialogRef: MatDialogRef<any>;

  constructor(private svc: VariantBuilderService, private dialog: MatDialog) {}

  openDetails() {
   
    this.fileNameDialogRef = this.dialog.open(
      this.svc.providerMapToComponent("detail"),  
      {
        height: '100%',
        width: '80vw',    
      }
    );

    this.fileNameDialogRef.disableClose = true;
   // this.fileNameDialogRef.autoFocus = true;
    this.fileNameDialogRef.componentInstance.title = this.title;
    this.fileNameDialogRef.componentInstance.summary = this.summary;

    this.fileNameDialogRef.componentInstance.resultData.subscribe(
      resultData => {
        this.formInfo = JSON.stringify(resultData);
      }
    );
  }

  ngOnInit() {}
}
