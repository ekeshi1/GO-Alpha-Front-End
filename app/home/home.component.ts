import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { AddWebsiteDialogComponent } from '../add-website-dialog/add-website-dialog.component';
import { Router } from "@angular/router";
import { ViewCampaignComponent } from '../view-campaign/view-campaign.component';
import {AuthService} from '../auth/auth.service';
import {SiteSetupDialogComponent} from '../site-setup-dialog/site-setup-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  apiUrl = environment.apiUrl;
  siteId: string;
  sites = [];
  campaigns = [];
  hideHistory = true;

  constructor(private http: HttpClient,
              public dialog: MatDialog,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {

    this.sites = [{
      siteName: '-',
      campaigns: 0,
      users: 0
    }]

    this.campaigns = [{
      campaignName: '-',
      campaignDescription: '-',
      creationDate: '',
      nrSent: 0,
      nrOpened: 0
    }]

    this.getSites();
  }

  getSites() {

    console.log('Getting all sites');
    console.log(this.apiUrl + `sites/getAllSites?userEmail=${this.authService.user.email}`);
    this.http.get(this.apiUrl + `sites/getAllSites?userEmail=${this.authService.user.email}`)
      .subscribe((res: any) => {
        console.log(res);
        this.sites = [...res.sites];
      });
  }

  addWebsite() {


    const dialogRef = this.dialog.open(AddWebsiteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result.userEmail);
        result.userEmail = this.authService.user.email
        console.log(result.userEmail);
        this.http.post(this.apiUrl + 'sites/addSite', result).subscribe((res: any) => {
          console.log(res.hash);


          const informationDialog = this.dialog.open(SiteSetupDialogComponent,{
            data: {
              projectId : res.hash
            }
          });

          informationDialog.afterClosed().subscribe(()=>{
            this.getSites();
          })




        });
      }
    });
  }

  viewCampaign(row){
    const dialogRef = this.dialog.open(ViewCampaignComponent, {data:row});
  }

  onSelectSite(row) {
    this.hideHistory = !this.hideHistory
    this.getAllCampaigns(row.idSite)
  }

  getAllCampaigns(id) {
    this.http.get(this.apiUrl + 'sites/getCampaigns?idSite=' + id)
      .subscribe((res: any) => {
        this.campaigns = [...res.campaigns];
      });
  }

  checkRows(row) {
    this.siteId = row.idSite;
    if (row.campaigns > 0) {
      this.onSelectSite(row);
    } else {
      this.router.navigate(['/', 'campaign', row.idSite]);
    }

  }

  deleteSite(id){
    this.http.delete(this.apiUrl + 'sites/deleteSite?idSite=' + id)
    .subscribe((res: any) => {
      this.getSites();
    })
  }

}
