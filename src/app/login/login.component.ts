import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators} from '@angular/forms'
// import { Usuario } from '../usuario';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm= new FormGroup({
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })
 vacio = false;
 submitted = false;
//  model = new Usuario(18, '', '', '');




  constructor( private router:Router) { }

  ngOnInit(): void {
    this.checkLocalStorage();
  }
  // onSubmit() { 
  //   //this.submitted = true;
  // alert("Registro Exitoso.!");
  // // this.model =new Hero(23, '', '', '','','','','');
  // this.router.navigate(['home'])
  // }

  
  

  checkLocalStorage(){
    if(localStorage.getItem('token')){
      // this.router.navigate(['dashboard'])
      this.router.navigate(['home'])
    }
  }

  onLogin(form : any){
    // console.log(form);
    // this.api.loginByEmail(form).subscribe(data => {
    //   let dataResponse:ResponseI = data;
    //   if (dataResponse.status == 'ok'){
    //     localStorage.setItem("token",dataResponse.result.token)
    //     this.router.navigate(['dashboard'])
    //   }else{
    //     this.errorStatus = true;
    //     this.errorMsj = dataResponse.result.error_msg;
    //   }
    //   // console.log(data)
    // })
  }
}
