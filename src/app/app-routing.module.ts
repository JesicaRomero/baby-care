import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontComponent } from './pages/front/front.component';
import { HomeComponent } from './pages/home/home.component';
import { FeedingComponent } from './pages/feeding/feeding.component';
import { LoginComponent } from './pages/login/login.component';
import { PooComponent } from './pages/poo/poo.component';
import { RegisterComponent } from './pages/register/register.component';
import { VaccinateComponent } from './pages/vaccinate/vaccinate.component';
import { CreatePooComponent } from './pages/create-poo/create-poo.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'front', component: FrontComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'poo', component: PooComponent },
  { path: 'feeding', component: FeedingComponent },
  { path: 'vaccinate', component: VaccinateComponent },
  { path: 'poo/create', component: CreatePooComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
