import { ApiService } from './api.service';
import { DataShareService } from './data-share.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  email: any;
  _usersArray: any;

  constructor(private data: DataShareService, private api: ApiService) {
    this.data.currentEmail.subscribe(email => (this.email = email));
    this.api.currentUser.subscribe(_usersArray => (this._usersArray = _usersArray));
  }

  canActivate() {
    console.log(this.email);
    console.log(this._usersArray);
    // const thing = this._usersArray.find(function(obj) {
    //   return obj.email === this.email;
    // });
    // console.log(thing);
    // if (this._usersArray.filter(users => users.email === this.email)) {
    //   console.log(true);
    //   return true;
    // } else {
    //   console.log(false);
    //   return false;
    // }

    const hasMagenicVendor = this._usersArray.some(vendor => vendor['email'] === this.email);
    console.log(hasMagenicVendor);
    if (hasMagenicVendor) {
      return true;
    } else {
      return false;
    }
    console.log('AuthGuard#canActivate called');
    // return true;
  }
}
