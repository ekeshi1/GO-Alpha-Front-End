import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {UserModel} from '../user.model';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerMessage: string;
  userRegistered = false;

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null),
    email: new FormControl(null, Validators.email),
    username: new FormControl(null ),
    password: new FormControl(null),
    confirmPassword: new FormControl(null)
  }, this.matchingPasswords);
  name = new FormControl('');
  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
  }

  redirectLogin() {
    this.router.navigate(['login']);
  }

  onFormSubmit() {
    if (this.registerForm.valid) {
      const name = this.registerForm.controls.name.value;
      const username = this.registerForm.controls.username.value;
      const email = this.registerForm.controls.email.value;
      const password = this.registerForm.controls.password.value;
      const user = new UserModel(username, email, name, password);


      console.log(user);


      this.authService.registerUser(user).subscribe((res) => {
        this.userRegistered = res.success;
        this.registerMessage = res.msg;
      }) ;
    }

  }

  matchingPasswords(group: FormGroup): ValidationErrors | null {
    if (group.value.password !== group.value.confirmPassword) {
      return {passwordsDontMatch: true} ;
    } else {
      return null;
    }
  }


}
