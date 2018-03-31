import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataShareService {
  private emailSource = new BehaviorSubject<string>('aksdjfkj@alsdkjfkj.com');
  currentEmail = this.emailSource.asObservable();

  constructor() {}

  changeEmail(email: string) {
    this.emailSource.next(email);
  }
}
