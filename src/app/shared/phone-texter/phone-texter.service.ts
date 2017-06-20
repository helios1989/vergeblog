import { Injectable, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import 'rxjs/add/operator/toPromise';

import { Subject } from 'rxjs/Subject';
@Injectable()
export class PhoneTexterService {
  phoneURI = '/api/sendText/';
  constructor(private http: Http) {

  }
  @Input()
  sendTextHandler: Function

    // delete("/api/blogs/:id")
  sendMessage(message: String): Promise<String> {
      return this.http.get(this.phoneURI + message)
            .toPromise()
            .then(response => response.json() as String)
            .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}
