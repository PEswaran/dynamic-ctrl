import { Component, OnInit, Input, ViewContainerRef } from "@angular/core";
import { MatDialog } from "@angular/material";
import { VariantBuilderService } from "../../variant-builder.service";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["../common.scss"]
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() summary: string;
  @Input() content: string;
  @Input() icon: string;
  private ref;
  constructor(
    private svc: VariantBuilderService,
    public dialog: MatDialog,
    public viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {}

  /* openDetails() {
    const comp = this.svc.providerMapToComponent("detail");
    let config = new MatDialog();
    config.viewContainerRef = this.viewContainerRef;
    const dialogRef  = this.dialog.open(comp, config);
    dialogRef.componentInstance.images = "BOO";
    console.log(dialogRef);
  }*/

  openDetails() {
    const comp = this.svc.providerMapToComponent("detail");
    console.log(comp.Object);
    const dialogRef = this.dialog.open(comp, {
      width: "80vw",
      height: "80vh",
      data: {
        title: "blah"
      }
    });
    //dialogRef.componentInstance.input='blah';
    console.log(dialogRef.componentInstance);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
