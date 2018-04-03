import { Posts } from './models/posts';
import { Comments } from './models/comments';
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
  _commentsArray: Comments[];
  _postsArray: Posts[];

  ngOnInit() {
    this.getUsers();
    this.getPosts();
    this.getComments();
  }

  getUsers(): void {
    this.api
      .getUsers()
      .subscribe(resultArray => (this._usersArray = resultArray), error => console.log('Error :: ' + error));
  }

  getComments(): void {
    this.api
      .getComments()
      .subscribe(resultArray => (this._commentsArray = resultArray), error => console.log('Error :: ' + error));
  }

  getPosts(): void {
    this.api
      .getPosts()
      .subscribe(resultArray => (this._postsArray = resultArray), error => console.log('Error :: ' + error));
  }
}
