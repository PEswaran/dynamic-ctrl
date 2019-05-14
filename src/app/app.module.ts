import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SharedMaterialModule } from './shared-material.module';
import { VariantsModule } from './variants/variants.module';
import { VariantBuilderService } from './variant-builder.service';
import { ReadOnlyComponent } from './variants/read-only/read-only.component';
import { ExpanderComponent } from './variants/expander/expander.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './variants/modal/modal.component';
import { DetailComponent } from './variants/detail/detail.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataFormComponent } from './variants/data-form/data-form.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    VariantsModule,
    SharedMaterialModule,
    MatDialogModule
  ],
  providers: [VariantBuilderService,
    { provide: MatDialogRef, useValue: {}},
    { provide: MAT_DIALOG_DATA, useValue: {}},
    { provide: 'readOnly', useValue: ReadOnlyComponent },
    { provide: 'expander', useValue: ExpanderComponent },
    { provide: 'modal', useValue: ModalComponent },
    { provide: 'detail', useValue: DetailComponent },
    { provide: 'dataForm', useValue: DataFormComponent }
  ],
  entryComponents: [ReadOnlyComponent, ExpanderComponent, ModalComponent, DetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
