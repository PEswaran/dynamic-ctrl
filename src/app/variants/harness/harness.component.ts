import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewContainerRef,
  Injector
} from '@angular/core';
import { VariantBuilderService } from '../../variant-builder.service';
import { ReadOnlyComponent } from '../read-only/read-only.component';
import { ConfigDataService } from '../../config-data.service';
import { Observable, of } from 'rxjs';
import { PanelModel } from '../../Models/panel-model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-harness',
  templateUrl: './harness.component.html',
  styleUrls: ['../common.scss']
})
export class HarnessComponent implements OnInit {
  // panelTypes = ['readOnly', 'expander', 'modal', 'popout', 'toggle'];

  public panelCollection: PanelModel[];
  private selectedPanel: PanelModel[];
  componentRef: any;

  @ViewChild('dynamic', {
    read: ViewContainerRef
  })
  viewContainerRef: ViewContainerRef;

  constructor(
    private svc: VariantBuilderService,
    private mapper: Injector,
    private dataSvc: ConfigDataService
  ) {}

  ngOnInit() {
    // this.panelTypes = this.dataSvc.fetchAll();
    this.dataSvc.fetchAll().subscribe((panels: PanelModel[]) => {
      this.panelCollection = panels;
    });
  }

  selectChange($event) {
    this.selectedPanel = $event;
    this.componentRef = this.svc.providerMapToComponent($event.name);
 //   this.svc.setRootViewContainerRef(this.viewContainerRef);
    this.svc.addDynamicComponent(this.componentRef,  $event, this.viewContainerRef);
  }

}
