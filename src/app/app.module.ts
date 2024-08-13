import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PersonalDetailsFormComponent } from './personal-details-form/personal-details-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ContactFormComponent,
    PersonalDetailsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
