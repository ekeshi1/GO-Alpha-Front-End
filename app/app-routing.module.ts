import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CampaignComponent } from './campaign/campaign.component';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {AuthGuard} from './guards/auth.guard';

export const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
  canActivate: [AuthGuard],
  canLoad: [AuthGuard]
}, {
  path: 'campaign',
  component: CampaignComponent,
  canActivate: [AuthGuard],

},
{
  path: 'campaign/:id',
  component: CampaignComponent,
  canActivate: [AuthGuard]
},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
