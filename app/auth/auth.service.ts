import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import {UserModel} from './user.model';
import { environment } from '../../environments/environment';
import {Router} from '@angular/router';


@Injectable()
export class AuthService {

  authToken: string;
  user: UserModel;
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient,
              private router: Router) {

    if (localStorage.getItem('id_token') != null && this.user === undefined) {
      console.log('constructor called');
      this.restoreUserData();
    }
  }

  registerUser(user: UserModel) {
    return this.http.post<{ success: boolean, msg: string }>(`${this.apiUrl}users/register`, user);
  }

  confirmUser(token) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<{ success: boolean, msg: string }>(`${this.apiUrl}users/confirm`, {
      token
    }, {headers});
  }

  authenticateUser(username, password) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<{ success: string, token: string, user: UserModel }>(
      `${this.apiUrl}users/authenticate`, {email: username, password}, {headers}
    );
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('expires', (Date.now() + 1000000).toString());
    this.authToken = token;
    this.user = user;
    console.log(this.user);
  }

  restoreUserData() {
    this.authToken = localStorage.getItem('id_token');
    this.user = JSON.parse(localStorage.getItem('user')) as UserModel;
  }

  // load latest token
  loadToken() {
    this.authToken = localStorage.getItem('id_token');
  }

  // Method to check whether the users is logged In or not
  loggedIn() {
    //console.log('running');
    const token: any = localStorage.getItem('id_token');
    if (token == null || token === undefined || Date.now() > +localStorage.getItem('expires')) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    this.router.navigate(['/', 'login']);
  }
}
