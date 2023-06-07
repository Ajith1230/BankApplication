
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignComponent } from './sign/sign.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AppComponent } from './app.component';
import { BanksComponent } from './banks/banks.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path : '',component : BanksComponent},
  {path : 'home',component : BanksComponent},
  {path : 'sign',component : SignComponent},
  {path : 'log',component : LoginComponent},
  {path : 'logout', component : LogoutComponent },
  {path : 'profile', component : ProfileComponent},
  {path : "**", redirectTo : 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
