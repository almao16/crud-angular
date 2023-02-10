import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientsComponent } from '../list-clients/list-clients.component';

const routes: Routes = [
  { path: '', component:  ListClientsComponent },
  // { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientmoduleRoutingModule { }
