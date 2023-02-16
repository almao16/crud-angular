import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { UsersService } from '../services/users.service';
import { Response } from '../usuario';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm= new FormGroup({
    usuario : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })
 vacio = false;
 submitted = false;
 error = false;
//  model = new Usuario(18, '', '', '');




  constructor( private router:Router, private usersService: UsersService) { }

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    if(localStorage.getItem('token')){
      // this.router.navigate(['dashboard'])
      this.router.navigate(['home'])
    }
  }

  onLogin(form : any){
    console.log(form);
    this.usersService.login(form).subscribe(data => {
      let dataResponse:Response = data;
      if (dataResponse.status == 'ok'){
        localStorage.setItem("token",dataResponse.result.token);
        this.router.navigate(['home']);
       
      }else{
        this.error =true;
      }
      // console.log(data)
    })
  }
}
