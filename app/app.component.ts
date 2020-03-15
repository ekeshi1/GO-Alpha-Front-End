import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { MatDialog } from '@angular/material/dialog';
import { AddWebsiteDialogComponent } from './add-website-dialog/add-website-dialog.component';
import {AuthService} from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alphaApp';
  apiUrl = environment.apiUrl;
  rows = [];
  hideHistory = true;
  showCampaign = false;
  shownLabel = 'Account';
  constructor(private http: HttpClient, public dialog: MatDialog,
              public authService: AuthService) {

  }

  ngOnInit() {

    this.rows = [{
      name: 'ewer',
      campaigns: 0,
      total_users: 0,
      subscriptions: 0,
      status: true
    }]
    // this.http.get(this.apiUrl + 'history').subscribe((res: any) => {
    //   this.rows = res;
    //   console.log(res);
    // })
  }

  addWebsite() {
    const dialogRef = this.dialog.open(AddWebsiteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.showCampaign = true;
        this.http.post(this.apiUrl + 'sites', result).subscribe((res: any) => {
          this.rows = [...res];
          console.log(res);
        })
      }
    });
  }

  onSelect(row) {
    this.hideHistory = !this.hideHistory
  }

}
