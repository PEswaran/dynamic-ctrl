import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ViewContainerRef} from '@angular/core';
import { VariantBuilderService } from 'src/app/variant-builder.service';

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
  @Input() formTitle: string;
  @Input() formInputs: string [];
  @ViewChild('dynamicFormsComponent', { read: ViewContainerRef }) formsContainer;

  @Output() public testString = new EventEmitter<string>();

  componentRef: any;
  formInfo: any;
  private ref;
  constructor(
    public builderSvc: VariantBuilderService
  ) {}

  ngOnInit() {
  }

  expand() {
    if (this.icon === 'expand_more') {
      this.addDynamicComponent();
      this.icon = 'expand_less';
    } else {
      this.removeDynamicComponent();
      this.icon = 'expand_more';

    }
  }

  public addDynamicComponent() {
    const comp = this.builderSvc.buildDyanmicComponent('dataForm');

    // create the component and attach to the viewContainer
    this.ref = this.formsContainer.createComponent(comp);

    // Add Inputs to dynamic component
    this.builderSvc.insertDynamicInputs(this.ref, this.formInputs, this.formTitle);

    // this._ref.instance.formField1 = 'Expansion_Data';

    // Handles output event, just emit the output here
    // To do: use models to pass data in and out.
    this.ref.instance.outputData.subscribe(data => {
      this.formInfo = JSON.stringify(data);     
    });
    }

  public removeDynamicComponent() {
    this.ref.destroy();
}

}
