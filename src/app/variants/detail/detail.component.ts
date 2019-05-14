import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ViewContainerRef} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { VariantBuilderService } from "src/app/variant-builder.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit {
  @ViewChild("formscontainer", { read: ViewContainerRef })
  viewContainerRef: ViewContainerRef;
  @Input() title;
  
  @Output() resultData: EventEmitter<any> = new EventEmitter<any>();

  outputData;
  formInputs = ["Content", "SetFlow", "E-Cord", "Temp"];
  private componentRef;
  constructor(
    public builderSvc: VariantBuilderService
  ) {}

  ngOnInit() {
    const comp = this.builderSvc.buildDyanmicComponent("dataForm");
    // create the component and attach to the viewContainer
    this.componentRef = this.viewContainerRef.createComponent(comp);

    // Add Inputs to dynamic component
    this.builderSvc.insertDynamicInputs(
      this.componentRef,
      this.formInputs,
      "Modal Form Edit"
    );

    // Handles output event, just emit your output here
    this.componentRef.instance.outputData.subscribe(data => {
    this.resultData.emit(data);
    });
   

  }
}
