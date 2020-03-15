import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add-website-dialog',
  templateUrl: './add-website-dialog.component.html',
  styleUrls: ['./add-website-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddWebsiteDialogComponent {
  data = {
    siteName:'',
    siteUrl:'',

  }

  constructor(
    public dialogRef: MatDialogRef<AddWebsiteDialogComponent>) {
    }


  onCancel(): void {
    this.dialogRef.close();
  }

  onAdd() {
    this.dialogRef.close(this.data);
  }

}
