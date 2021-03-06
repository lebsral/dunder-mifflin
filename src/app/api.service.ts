import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Users } from './models/users';
import { Posts } from './models/posts';
import { Comments } from './models/comments';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ApiService {
  private _usersURL = 'https://jsonplaceholder.typicode.com/users';
  private _postsURL = 'https://jsonplaceholder.typicode.com/posts';
  private _commentsURL = 'https://jsonplaceholder.typicode.com/comments';

  public _commentsArray: Comments[];
  public _postsArray: Posts[];
  public _usersArray: Users[];

  private userSource = new BehaviorSubject<Users[]>([]);
  currentUser = this.userSource.asObservable();

  constructor(private http: Http) {}

  getUsers(): Observable<Users[]> {
    return this.http
      .get(this._usersURL)
      .map((response: Response) => {
        this._usersArray = <Users[]>response.json();
        this.userSource.next(<Users[]>response.json());
        return this._usersArray;
      })
      .catch(this.handleError);
  }

  getPosts(): Observable<Posts[]> {
    return this.http
      .get(this._postsURL)
      .map((response: Response) => {
        this._postsArray = <Posts[]>response.json();
        return this._postsArray;
      })
      .catch(this.handleError);
  }

  getComments(): Observable<Comments[]> {
    return this.http
      .get(this._commentsURL)
      .map((response: Response) => {
        this._commentsArray = <Comments[]>response.json();
        return this._commentsArray;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
