import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignComponent } from './sign/sign.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout/logout.component';
import { BanksComponent } from './banks/banks.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroService } from './hero.service';





@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    LoginComponent,
    LogoutComponent,
    BanksComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
