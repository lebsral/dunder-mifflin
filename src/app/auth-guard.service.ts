import { DataShareService } from './data-share.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  email: any;

  constructor(private data: DataShareService) {
    this.data.currentEmail.subscribe(email => (this.email = email));
  }

  canActivate() {
    console.log(this.email);
    console.log('AuthGuard#canActivate called');
    return true;
  }
}
