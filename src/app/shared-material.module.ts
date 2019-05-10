import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// tslint:disable-next-line:max-line-length
import {
  MatToolbarModule,
   MatSidenavModule, MatIconModule,
   MatListModule, MatCardModule,
   MatLineModule,
    MatButtonModule,
  MatInputModule,
  MatFormFieldModule, MatDialogModule,
  MatRadioModule} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatLineModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatRadioModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule, MatCardModule,
    MatLineModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatRadioModule
  ]
})
export class SharedMaterialModule { }
