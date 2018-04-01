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
  // _usersArray: Users[];
  _commentsArray: Comments[];
  email: string;

  constructor(private apiSerivce: ApiService, private data: DataShareService) {}

  ngOnInit() {
    // this.getUsers();
    this.getPosts();
    this.getComments();
    this.data.currentEmail.subscribe(email => (this.email = email));
  }

  getPosts(): void {
    this.apiSerivce
      .getPosts()
      .subscribe(resultArray => (this._postsArray = resultArray), error => console.log('Error :: ' + error));
  }

  // getUsers(): void {
  //   this.apiSerivce
  //     .getUsers()
  //     .subscribe(resultArray => (this._usersArray = resultArray), error => console.log('Error :: ' + error));
  // }

  getComments(): void {
    this.apiSerivce
      .getComments()
      .subscribe(resultArray => (this._commentsArray = resultArray), error => console.log('Error :: ' + error));
  }
}
