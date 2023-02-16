import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {  UsuariosListItems } from '../../usuario';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  characters$? : Observable<UsuariosListItems[]>

  constructor(private usersService: UsersService) {
    console.log("lista de usuarios")
  }
  // constructor() { }
  ngOnInit(): void {
    this.characters$ = this.usersService.getUsuarios();

  }

}
