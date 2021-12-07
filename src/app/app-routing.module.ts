import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './main/login/login.component';
import { ListAppComponent } from './main/list-app/list-app.component';
import { WelcomeMessageComponent } from './main/welcome-message/welcome-message.component';
import { ErgonomicsDashboardComponent } from './main/ergonomics-dashboard/ergonomics-dashboard.component';
import { ErgonomicUpdateContentComponent } from './components/ergonomic-update-content/ergonomic-update-content.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'list-app', component: ListAppComponent},
  {path: 'welcome-message/:route', component: WelcomeMessageComponent},
  {path: 'user/dashbaord', component: ListAppComponent},
  {path: 'user/ergo-dashboard', component: ErgonomicsDashboardComponent},
  {path: 'user/ergo-update/:id', component: ErgonomicUpdateContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
