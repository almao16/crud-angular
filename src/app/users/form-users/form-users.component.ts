import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.scss']
})
export class FormUsersComponent implements OnInit {


  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }


  onSubmit() { 
    //this.submitted = true;
  alert("Registro Exitoso.!");
  // this.model =new Hero(23, '', '', '','','','','');
  }
}
