import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthService {

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  postLogin(username, password){
    const data = {
      username: username,
      password: password
    };

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.post('https://www.check-fit.com/wp-json/jwt-auth/v1/token', data, {headers: headers});
  }
  setCurrentUser(data: any){
      alert(JSON.stringify(data))
    localStorage.setItem('user', JSON.stringify(data));
  }
  getCurrentUser(){
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;

  }
}
