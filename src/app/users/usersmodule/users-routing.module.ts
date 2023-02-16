import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUsersEditComponent } from '../form-users-edit/form-users-edit.component';
import { FormUsersComponent } from '../form-users/form-users.component';
import { ListUsersComponent } from '../list-users/list-users.component';

const routes: Routes = [
  { path: '', component:  ListUsersComponent },
  { path: 'user', component:  FormUsersComponent },
  { path:'editUser/:id', component:FormUsersEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
