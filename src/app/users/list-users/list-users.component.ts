import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {  ListaPaciente } from '../../usuario';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  // characters$? : Observable<listaPaciente[]>
  characters$?:ListaPaciente [] ;
  constructor(private usersService: UsersService, private router:Router) {
    console.log("lista de usuarios")
  }
  // constructor() { }
  ngOnInit(): void {
    // this.characters$ = this.usersService.getPacientes(5555);
    this.usersService.getPacientes(3).subscribe(data =>{
      this.characters$=data
      // console.log(data)
    })
    this.checkLocalStorage();

  }

  checkLocalStorage(){
    if(localStorage.getItem('token') ===null){
      // this.router.navigate(['dashboard'])
      this.router.navigate(['login'])
    }
  }

  editPatient(id: any){
    this.router.navigate(['home/users/editUser', id])
    // console.log(id)
  }

  newPatient(){
    this.router.navigate(['create'])
  }

}
