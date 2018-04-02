import { ApiService } from './../api.service';
import { DataShareService } from './../data-share.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  email: string;
  _usersArray: any;

  constructor(private data: DataShareService, private api: ApiService) {}

  ngOnInit() {
    this.data.currentEmail.subscribe(email => (this.email = email));
    this.api.currentUser.subscribe(_usersArray => (this._usersArray = _usersArray));
    this._usersArray = this.api._usersArray;
    // console.log(this.email);
    // console.log(this._usersArray);
  }

  newEmail(newEmail: string) {
    console.log(this.email);
    console.log(this._usersArray);
    this.data.changeEmail(newEmail);
  }
}
