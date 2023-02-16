import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'login',loadChildren: ()=>import('./clients/clientmodule/clientmodule.module').then(m => m.ClientmoduleModule)},
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
//  { path: 'dashboard', component: DashboardComponent },
  { path: 'clients',loadChildren: ()=>import('./clients/clientmodule/clientmodule.module').then(m => m.ClientmoduleModule)},
  { path: 'home/users',loadChildren: ()=>import('./users/usersmodule/users.module').then(m => m.UsersModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
