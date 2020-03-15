import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-view-campaign',
  templateUrl: './view-campaign.component.html',
  styleUrls: ['./view-campaign.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewCampaignComponent implements OnInit {
  camp: any;
  constructor(public dialogRef: MatDialogRef<ViewCampaignComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any) {
    this.camp = dialogData
    console.log(this.camp)
  }

  ngOnInit() {
  }

}
