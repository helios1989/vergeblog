import { Component, OnInit } from '@angular/core';
import { PhoneTexterService } from '../shared/phone-texter/phone-texter.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  providers: [PhoneTexterService]
})
export class ContactUsComponent implements OnInit {

  constructor(
    private phoneTexterService: PhoneTexterService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    // this.authService.login();
  }

  sendText(phoneNumber, textMessage) {
    console.log('i am not working ' + phoneNumber);
    console.log('text message ' + textMessage);
  }
}
