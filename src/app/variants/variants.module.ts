import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadOnlyComponent } from './read-only/read-only.component';
import { HarnessComponent } from './harness/harness.component';
import { FormsModule } from '@angular/forms';
import { SharedMaterialModule } from '../shared-material.module';
import { ExpanderComponent } from './expander/expander.component';
import { ModalComponent } from './modal/modal.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [ReadOnlyComponent, HarnessComponent, ExpanderComponent, ModalComponent, DetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedMaterialModule
  ],
  providers: [
  ],
  exports: [ReadOnlyComponent, HarnessComponent]
})
export class VariantsModule { }
