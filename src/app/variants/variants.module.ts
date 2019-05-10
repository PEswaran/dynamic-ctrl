import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadOnlyComponent } from './read-only/read-only.component';
import { HarnessComponent } from './harness/harness.component';
import { FormsModule } from '@angular/forms';
import { SharedMaterialModule } from '../shared-material.module';
import { ExpanderComponent } from './expander/expander.component';
import { ModalComponent } from './modal/modal.component';
import { DetailComponent } from './detail/detail.component';
import { DataFormComponent } from './data-form/data-form.component';

@NgModule({
  declarations: [
    ReadOnlyComponent,
    HarnessComponent,
    ExpanderComponent,
    ModalComponent,
    DetailComponent,
    DataFormComponent
  ],
  imports: [CommonModule, FormsModule, SharedMaterialModule],
  entryComponents: [ModalComponent, DetailComponent, DataFormComponent],
  exports: [
    ReadOnlyComponent,
    HarnessComponent,
    ModalComponent,
    DetailComponent,
    DataFormComponent,
    ExpanderComponent
  ]
})
export class VariantsModule {}
