import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { AmazingTimePickerService } from 'amazing-time-picker';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {
  idSite: string;
  camp = {
    campaignName: '',
    creationDate: '',
    scheduleTime: '',
    campaignDescription: '',
    notificationTitle: '',
    notificationMessage: '',
    notificationUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    notificationIcon: '',
    sendNow: false
  }
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private _Activatedroute: ActivatedRoute,
    private router: Router, private atp: AmazingTimePickerService) { }

  ngOnInit() {
    this.idSite = this._Activatedroute.snapshot.paramMap.get("id");
  }

  saveCampaign() {
    if(this.camp.notificationUrl.length > 300 || this.camp.notificationIcon.length > 300){
      console.log('Too Large Url');
    return;
    }


    this.http.post(this.apiUrl + 'sites/addCampaign?idSite=' + this.idSite, this.camp).subscribe((res: any) => {
      this.router.navigate(['/', 'home']);
    })
  }

  open() {
    const amazingTimePicker = this.atp.open();
    amazingTimePicker.afterClose().subscribe(time => {
      this.camp.scheduleTime = time;
    });
  }

}
