import { Component, OnInit, Input } from '@angular/core';

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

  sendText(phone: string) {
    alert(phone);
    this.sendText(phone);
  }
}
