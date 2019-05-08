import { Component } from '@angular/core';
import { ConfigDataService } from './config-data.service';
import { Observable, pipe } from 'rxjs';
import { PanelModel } from './Models/panel-model';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shared-controls-lib';
  productA: PanelModel[];

  private panels: PanelModel[] = [];
  private panelsObservable: Observable<PanelModel[]> ;

  private panelA;
 private panelB: PanelModel[] = [];

  constructor(private configSvc: ConfigDataService) {
// get all use async
//  this.panelsObservable = this.configSvc.get_panels();

  // get by Id
  // this.configSvc.updateCustomer('4').subscribe((data: {}) => {
  //  this.panelA = data;
  // });

  /*this.configSvc.getPanelByName('Product002').
  subscribe((data: PanelModel[] ) => {
    this.panelB = data;
    console.log(this.panelB);
  });*/
}
}
