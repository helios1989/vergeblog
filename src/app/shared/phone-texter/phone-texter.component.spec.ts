import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneTexterComponent } from './phone-texter.component';

describe('PhoneTexterComponent', () => {
  let component: PhoneTexterComponent;
  let fixture: ComponentFixture<PhoneTexterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneTexterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneTexterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
