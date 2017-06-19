import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-phone-texter',
  templateUrl: './phone-texter.component.html',
  styleUrls: ['./phone-texter.component.css']
})
export class PhoneTexterComponent implements OnInit {
  phone = '';
  // @Input()
  // sendSMS: Function;
  @Input()
  sendTextHandler: Function;

  constructor() { }

  ngOnInit() {

  }

  sendText(phoneNumber) {
    console.log(phoneNumber);
    this.sendTextHandler(phoneNumber);
  }
}
