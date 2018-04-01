import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Users } from './models/users';
import { Posts } from './models/posts';
import { Comments } from './models/comments';

@Injectable()
export class ApiService {
  private _usersURL = 'https://jsonplaceholder.typicode.com/users';
  private _postsURL = 'https://jsonplaceholder.typicode.com/posts';
  private _commentsURL = 'https://jsonplaceholder.typicode.com/comments';

  public users: any;
  public posts: any;
  public comments: any;

  constructor(private http: Http) {}

  getUsers(): Observable<Users[]> {
    return this.http
      .get(this._usersURL)
      .map((response: Response) => {
        this.users = <Users[]>response.json();
        return this.users;
        // return <Users[]>response.json();
      })
      .catch(this.handleError);
  }

  getPosts(): Observable<Posts[]> {
    return this.http
      .get(this._postsURL)
      .map((response: Response) => {
        this.posts = <Posts[]>response.json();
        return this.posts;
        // return <Posts[]>response.json();
      })
      .catch(this.handleError);
  }

  getComments(): Observable<Comments[]> {
    return this.http
      .get(this._commentsURL)
      .map((response: Response) => {
        this.comments = <Comments[]>response.json();
        return this.comments;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
