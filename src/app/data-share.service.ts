import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataShareService {
  private emailSource = new BehaviorSubject<string>('');
  currentEmail = this.emailSource.asObservable();
  // Sincere@april.biz

  constructor() {}

  changeEmail(email: string) {
    this.emailSource.next(email);
  }
}
