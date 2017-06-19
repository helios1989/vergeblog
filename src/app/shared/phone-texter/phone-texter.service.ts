import { Injectable, Input } from '@angular/core';


import { Subject } from 'rxjs/Subject';
@Injectable()
export class PhoneTexterService {
  @Input()
  sendTextHandler: Function

  sendMessage(phoneNumber: string) {
    this.sendTextHandler(phoneNumber);
  }
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}
