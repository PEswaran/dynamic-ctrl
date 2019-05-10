import {
  Component,
  OnInit,
  Input,
  Inject,
  EventEmitter,
  Output,
  ViewChild,
  ViewContainerRef,
  OnDestroy,
  AfterViewInit,
  EmbeddedViewRef
} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { VariantBuilderService } from "src/app/variant-builder.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit, OnDestroy {
  @ViewChild("formscontainer", { read: ViewContainerRef })
  viewContainerRef: ViewContainerRef;

  private componentRef;
  constructor(
    public builderSvc: VariantBuilderService,
    public dialogRef: MatDialogRef<DetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {
    const comp = this.builderSvc.buildDyanmicComponent("dataForm");
    //create the component and attach to the viewContainer
    this.componentRef = this.viewContainerRef.createComponent(comp);

    // Add Inputs to dynamic component
    this.builderSvc.insertDynamicInputs(
      this.componentRef,
      this.data,
      "Modal Form Edit"
    );
    console.log("temp");
  }
  ngOnDestroy() {
    this.componentRef.destroy();
  }
}
