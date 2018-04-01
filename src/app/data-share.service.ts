import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataShareService {
  private emailSource = new BehaviorSubject<string>('Sincere@april.biz');
  currentEmail = this.emailSource.asObservable();

  constructor() {}

  changeEmail(email: string) {
    this.emailSource.next(email);
  }
}
