import { Users } from './models/users';
import { ApiService } from './api.service';
import { DataShareService } from './data-share.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  email: any;
  _usersArray: Users[];

  constructor(private data: DataShareService, private api: ApiService) {
    this.data.currentEmail.subscribe(email => (this.email = email));
    this.api.currentUser.subscribe(_usersArray => (this._usersArray = _usersArray));
  }

  canActivate() {
    console.log(this.email);
    console.log(this._usersArray);

    const hastheEmail = this._usersArray.some(user => user['email'] === this.email);
    if (hastheEmail) {
      return true;
    } else {
      alert('The email ' + this.email + ' does not exist.');
      return false;
    }
  }
}
