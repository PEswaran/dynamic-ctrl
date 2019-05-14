import {
  Injectable,
  ComponentFactoryResolver,
  ComponentFactory,
  ComponentRef,
  ViewContainerRef,
  Injector
} from '@angular/core';
import { ReadOnlyComponent } from './variants/read-only/read-only.component';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VariantBuilderService {
  componentRef: ComponentRef<any>;
  rootViewContainer: any;
 
  constructor(
    private resolver: ComponentFactoryResolver,
    private mapper: Injector
  ) {}

  
  providerMapToComponent(panelNameAsString) {
    return this.mapper.get<any>(panelNameAsString, ReadOnlyComponent);
  }

  buildDyanmicComponent(panelNameAsString): any {
    const componentName = this.mapper.get<any>(
      panelNameAsString,
      ReadOnlyComponent
    );
    return this.resolver.resolveComponentFactory(componentName);
  }

  insertDynamicInputs(componentRef, inputs, title) {
  // Insert @inputs dynamically from a config file
    componentRef.instance.formTitle = title;
    Object.keys(inputs).forEach(k => {
      componentRef.instance['formField' + k] = inputs[k];
    });
    return componentRef;   
  }

  subscribeToDynamicOutputs(componentRef) {
     // componentRef.instance.outputEvent.subscribe(val => console.log(val));
    return  componentRef.instance.outputData.subscribe(val => console.log(val));
  }


  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  addDynamicComponent(panelName, content, viewRef) {
    const factory = this.resolver.resolveComponentFactory(panelName);
    this.rootViewContainer = viewRef;
    const component = factory.create(this.rootViewContainer.parentInjector);
    const componentRef = this.buildComponent(component, content);
    this.rootViewContainer.insert(componentRef.hostView);
  }

  buildComponent(componentRef, content): any {
    console.log(content);
    Object.keys(content).forEach(k => {
      componentRef.instance[k] = content[k];
    });
    componentRef.instance.outputEvent.subscribe(val => console.log(val));

    return componentRef;
  }

  createVariantComponent(panelNameAsString, viewRef): any {
    const panelComp = this.mapper.get<any>(
      panelNameAsString,
      ReadOnlyComponent
    );
    const factory = this.resolver.resolveComponentFactory(panelComp);
    const ref = viewRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }
}

/*=======**/

/**
// tslint:disable-next-line: jsdoc-format
printSimpleTest() {
  return "Called from service";
// tslint:disable-next-line: jsdoc-format
  // console.log('I am in this service');
}

createVariantComponent(panelName, container) {
  const factory = this.resolver.resolveComponentFactory(panelName);
  this.componentRef = container.createComponent(factory);
  return this.componentRef;
}

buildComponent(componentRef, content): any {
  console.log("building out this component" + componentRef.panelName);
  Object.keys(content).forEach(k => {
    componentRef.instance[k] = content[k];
  });

  return this.componentRef;
}
retrieveOutputs(componentRef, content) {
  this.componentRef.instance.testString.subscribe(data => {
    console.log(data);
  });
} */
