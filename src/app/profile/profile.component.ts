import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Comments } from './../models/comments';
import { Users } from './../models/users';
import { Posts } from './../models/posts';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ApiService]
})
export class ProfileComponent implements OnInit {
  _postsArray: Posts[];
  _usersArray: Users[];
  _commentsArray: Comments[];

  constructor(private apiSerivce: ApiService) {}

  getPosts(): void {
    this.apiSerivce
      .getPosts()
      .subscribe(resultArray => (this._postsArray = resultArray), error => console.log('Error :: ' + error));
  }

  getUsers(): void {
    this.apiSerivce
      .getUsers()
      .subscribe(resultArray => (this._usersArray = resultArray), error => console.log('Error :: ' + error));
  }

  getComments(): void {
    this.apiSerivce
      .getComments()
      .subscribe(resultArray => (this._commentsArray = resultArray), error => console.log('Error :: ' + error));
  }

  ngOnInit() {
    this.getPosts();
    this.getComments();
    this.getUsers();
  }
}
