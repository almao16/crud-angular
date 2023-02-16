import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListUsersComponent } from '../list-users/list-users.component';
import { FormUsersComponent } from '../form-users/form-users.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from 'src/app/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    ListUsersComponent,
    FormUsersComponent, 
    NavBarComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class UsersModule { }
