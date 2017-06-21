import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogDetailsComponent } from './blogs/blog-details/blog-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogListComponent } from './blogs/blog-list/blog-list.component';

const routes: Routes = [
  { path: '', component: BlogListComponent},
  { path: 'home', component: BlogListComponent },
  { path: 'about', component:  AboutComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'blog/:id', component: BlogDetailsComponent }
  // { path: '404', component: NotFoundComponent },
  // { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export  class AppRoutingModule {}
