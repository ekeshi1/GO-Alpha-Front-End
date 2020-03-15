import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, [Validators.required, Validators.min(6)])
  });
  constructor(private authService: AuthService, private flashMessage: FlashMessagesService, private router: Router) { }

  ngOnInit() {
  }

  onLoginRequest() {

    const username = this.loginForm.controls.username.value;
    const password = this.loginForm.controls.password.value;
    console.log(username);
    console.log(password);

    this.authService.authenticateUser(username, password).subscribe((res) => {
      console.log(res);

      if ( res.success ) {
        this.authService.storeUserData(res.token, res.user);
        this.flashMessage.show('You are now logged in', {
          cssClass: 'alert-success',
          timeout: 5000
        });
        this.router.navigate(['home']);
        return false;
      } else {
        this.flashMessage.show('Could not log you in', {
          cssClass: 'alert-danger',
          timeout: 5000
        });
        this.router.navigate(['login']);
      }
    });

  }

  registerRedirect() {
    this.router.navigate(['register']);
  }


}
