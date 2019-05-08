import { Component, OnInit, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { VariantBuilderService } from '../../variant-builder.service';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['../common.scss']
})
export class ModalComponent implements OnInit {

  @ViewChild('details', {
    read: ViewContainerRef
  })
  viewContainerRef: ViewContainerRef;
  componentRef: any;
  contentData = 'sample';
  oldValue;

  constructor(private svc: VariantBuilderService, public dialog: MatDialog) { }

  ngOnInit() {
    this.oldValue = this.contentData;
  }

  openDetails() {
    // this.svc.setRootViewContainerRef(this.viewContainerRef);
   // this.svc.createDetailComponent(DetailComponent, this.viewContainerRef);
    console.log();
    const dialogRef = this.dialog.open(DetailComponent, {
    width: '100vw',
    height: '100vh',
    maxWidth: '100vw',
      data: {title: 'CUSTOM DETAIL',
      contentData : this.contentData }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.contentData = result;
    });
  }
  }

