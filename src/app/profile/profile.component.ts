import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Comments } from './../models/comments';
import { Users } from './../models/users';
import { Posts } from './../models/posts';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  _postsArray: Posts[];
  _usersArray: Users[];
  _commentsArray: Comments[];
  email: string;
  myUser: Users;

  constructor(private apiService: ApiService, private data: DataShareService) {}

  ngOnInit() {
    this.getPosts();
    this.getComments();
    this.data.currentEmail.subscribe(email => (this.email = email));
    this.apiService.currentUser.subscribe(_usersArray => (this._usersArray = _usersArray));
    this.myUser = this._usersArray.find(user => user['email'] === this.email);
  }

  getPosts(): void {
    this.apiService
      .getPosts()
      .subscribe(resultArray => (this._postsArray = resultArray), error => console.log('Error :: ' + error));
  }

  getComments(): void {
    this.apiService
      .getComments()
      .subscribe(resultArray => (this._commentsArray = resultArray), error => console.log('Error :: ' + error));
  }
}
