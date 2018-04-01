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
  constructor(private data: DataShareService, private api: ApiService) {}

  ngOnInit() {
    this.data.currentEmail.subscribe(email => (this.email = email));
  }

  newEmail(newEmail: string) {
    console.log('in new email');
    console.log(this.api.users);
    this.data.changeEmail(newEmail);
  }
}
