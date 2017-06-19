import { Component, OnInit } from '@angular/core';
import { PhoneTexterService } from '../shared/phone-texter/phone-texter.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  providers: [PhoneTexterService]
})
export class ContactUsComponent implements OnInit {

  constructor(private phoneTexterService: PhoneTexterService) { }

  ngOnInit() {

  }

  sendText(phoneNumber) {
    console.log('i am not working' + phoneNumber);
    this.phoneTexterService.sendText(phoneNumber).then((msg) => {
        console.log('successfully sent ' + msg);
        // this.router.navigate(['']);
      });
  }
}
