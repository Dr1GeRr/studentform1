import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PersonalDetailsFormComponent } from './personal-details-form/personal-details-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Default route
  { path: 'login', component: LoginFormComponent },
  { path: 'contact-details', component: ContactFormComponent },
  { path: 'personal-details', component: PersonalDetailsFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
