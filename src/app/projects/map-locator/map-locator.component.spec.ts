import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLocatorComponent } from './map-locator.component';

describe('MapLocatorComponent', () => {
  let component: MapLocatorComponent;
  let fixture: ComponentFixture<MapLocatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapLocatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapLocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
