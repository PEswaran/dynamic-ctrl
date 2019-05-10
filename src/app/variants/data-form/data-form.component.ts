import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { VariantBuilderService } from "src/app/variant-builder.service";

@Component({
  selector: "app-data-form",
  templateUrl: "./data-form.component.html",
  styleUrls: ["./data-form.component.scss"]
})
export class DataFormComponent implements OnInit {

  @Output() outputData: EventEmitter<boolean> = new EventEmitter<any>();
  @Input() formTitle; formField0; formField1; formField2; formField3 :string;

  public data: any;

  constructor(private svc: VariantBuilderService) {}

  ngOnInit() {
  }

  register(form) {

    this.outputData.emit(form.value);
  
  }
}
