import { Users } from './models/users';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dunder Mifflin Internal App';
  constructor(private api: ApiService) {}
  _usersArray: Users[];

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.api
      .getUsers()
      .subscribe(resultArray => (this._usersArray = resultArray), error => console.log('Error :: ' + error));
  }
}
