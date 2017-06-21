import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherProjectComponent } from './weather-project/weather-project.component';
import { WeatherDetailComponent } from './weather-project/weather-detail/weather-detail.component';
import { ProjectsComponent} from './projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AuthGuard } from '../auth-guard.service';

const projroutes: Routes = [
   { path: '', component: WeatherProjectComponent },
  { path: 'weather',
    component: WeatherProjectComponent,
    // canActivateChild: [AuthGuard],// guard only for those child
    children:
    [
      { path: 'edit/:id', component:  WeatherDetailComponent },
      { path: 'add', component: WeatherDetailComponent }
    ]
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: 'edit/:id', component:  ProjectDetailComponent },
      { path: 'add', component: ProjectDetailComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(projroutes) ],
  exports: [RouterModule]
})
export  class ProjectRoutingModule {}
