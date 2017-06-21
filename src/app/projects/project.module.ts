import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { WeatherProjectComponent } from './weather-project/weather-project.component';
import { WeatherDetailComponent } from './weather-project/weather-detail/weather-detail.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@NgModule({
  declarations: [WeatherProjectComponent, WeatherDetailComponent, ProjectDetailComponent],
  imports: [ CommonModule, ProjectRoutingModule ],
  providers: [],
})
export class ProjectModule {}
