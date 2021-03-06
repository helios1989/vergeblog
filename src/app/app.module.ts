import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BlogDetailsComponent } from './blogs/blog-details/blog-details.component';
import { BlogListComponent } from './blogs/blog-list/blog-list.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AppRoutingModule }     from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectModule} from './projects/project.module';
// import { ProjectRoutingModule } from './projects/project-routing.module';

import { LocalStorageModule } from 'angular-2-local-storage';
import { PhoneTexterComponent } from './shared/phone-texter/phone-texter.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ContactResolver } from './contact-us/contact-resolver.service';
//guarsd and auth.guards-service

@NgModule({
  declarations: [
    AppComponent,
    BlogDetailsComponent,
    BlogListComponent,
    HeaderComponent,
    AboutComponent,
    ContactUsComponent,
    NotFoundComponent,
    PhoneTexterComponent,
    ProjectsComponent,
    LoginComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectModule,
    AppRoutingModule,
    LocalStorageModule.withConfig({
            prefix: 'my-app',
            storageType: 'localStorage'
    })
  ],
  // providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent],
  providers: [AuthGuard, AuthService, ContactResolver]
})
export class AppModule { }
