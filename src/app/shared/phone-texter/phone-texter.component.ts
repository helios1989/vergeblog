import { Component, OnInit, Input } from '@angular/core';
import { PhoneTexterService } from './phone-texter.service';
@Component({
  selector: 'app-phone-texter',
  templateUrl: './phone-texter.component.html',
  styleUrls: ['./phone-texter.component.css'],
  providers: [ PhoneTexterService ]
})
export class PhoneTexterComponent implements OnInit {
  phone = '';
  // @Input()
  // sendSMS: Function;
  @Input() 
  sendTextHandler: Function;

  constructor( private phoneTexterService: PhoneTexterService) { }

  ngOnInit() {
    
  }

  sendText(phone: string, textMessage: string) {
    this.phoneTexterService.sendMessage(textMessage).then((res: String) => {
        this.sendTextHandler(res);
    });    
  }
}
