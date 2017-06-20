import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherProjectComponent } from './weather-project/weather-project.component';
import { MapLocatorComponent } from './map-locator/map-locator.component';

@NgModule({
  declarations: [WeatherProjectComponent, MapLocatorComponent],
  imports: [ CommonModule ],
  exports: [ ProjectModule ],
  providers: [],
  bootstrap: []
})
export class ProjectModule {}
