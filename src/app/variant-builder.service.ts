import {
  Injectable,
  ComponentFactoryResolver,
  ComponentFactory,
  ComponentRef,
  ViewContainerRef
} from '@angular/core';
import { ReadOnlyComponent } from './variants/read-only/read-only.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VariantBuilderService {
  componentRef: ComponentRef<any>;
  rootViewContainer: any;
  bunchOfOutputs: Observable<string[]>;

  constructor(private resolver: ComponentFactoryResolver) {}
  printSimpleTest() {
    return 'Called from service';
    // console.log('I am in this service');
  }

  createVariantComponent(panelName, container) {
    const factory = this.resolver.resolveComponentFactory(panelName);
    this.componentRef = container.createComponent(factory);
    return this.componentRef;
  }

  buildComponent(componentRef, content): any {
    console.log('building out this component' + componentRef.panelName);
    Object.keys(content).forEach(k => {
      componentRef.instance[k] = content[k];
    });

    return this.componentRef;
  }
  retrieveOutputs(componentRef, content) {
    this.componentRef.instance.testString.subscribe(data => {
      console.log(data);
    });
  }
  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  addDynamicComponent(panelName, content) {
    console.log(content);
    const factory = this.resolver.resolveComponentFactory(panelName);
    const component = factory.create(this.rootViewContainer.parentInjector);
    const componentRef = this.buildComponent(component, content);
    this.rootViewContainer.insert(component.hostView);
  }

  createDetailComponent(panelName, viewContainerRef) {
    const factory = viewContainerRef.resolveComponentFactory(panelName);
  }


}
