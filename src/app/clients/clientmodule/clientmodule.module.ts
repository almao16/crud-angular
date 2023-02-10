import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientmoduleRoutingModule } from './clientmodule-routing.module';
import { ListClientsComponent } from '../list-clients/list-clients.component';


@NgModule({
  declarations: [
    ListClientsComponent
  ],
  imports: [
    CommonModule,
    ClientmoduleRoutingModule,
    
  ]
})
export class ClientmoduleModule { }
