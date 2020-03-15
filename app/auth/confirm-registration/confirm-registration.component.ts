import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-confirm-registration',
  templateUrl: './confirm-registration.component.html',
  styleUrls: ['./confirm-registration.component.scss']
})
export class ConfirmRegistrationComponent implements OnInit {
  msg: string;
  success: boolean;

  constructor(private authService: AuthService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const token = params.token;
      this.authService.confirmUser(token).subscribe((response) => {
        console.log(response);
        this.msg = response.msg;
        this.success = response.success;
      });
    });

  }

}
