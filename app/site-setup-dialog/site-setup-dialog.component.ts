import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-site-setup-dialog',
  templateUrl: './site-setup-dialog.component.html',
  styleUrls: ['./site-setup-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class SiteSetupDialogComponent implements  OnInit {

  code = ''

  constructor(public dialogRef: MatDialogRef<SiteSetupDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  this.code = '&ltscript src="encoding-indexes.js"\&gt&lt/script&gt \n' +
    '&ltscript src="encoding.js"&gt&lt/script&gt \n' +
    '&ltscript src="client.js"&gt&lt/script&gt \n' +
    '&ltscript &gt\n' +
    '    initPushNotif(\'' + this.data.projectId + '\');\n' +
    '&lt\/script&gt';

    console.log(this.code);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
