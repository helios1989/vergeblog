import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherProjectComponent } from './weather-project.component';

describe('WeatherProjectComponent', () => {
  let component: WeatherProjectComponent;
  let fixture: ComponentFixture<WeatherProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
