import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'
import { Paciente,Response } from '../../usuario';
import { UsersService } from '../../services/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.scss']
})
export class FormUsersComponent implements OnInit {


  submitted = false;

  newForm = new FormGroup ({
    pacienteId :  new FormControl(''), 
    dni : new FormControl(''),
    nombre : new FormControl(''),
    direccion : new FormControl(''),
    codigoPostal : new FormControl(''),
    telefono :  new FormControl(''),
    genero : new FormControl(''),
    fechaNacimiento :  new FormControl(''),
    correo : new FormControl(''),
    token :  new FormControl(''),
  })
  constructor(private usersService: UsersService, private router:Router, private activerouter:ActivatedRoute) { }

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    this.newForm.patchValue({
      'token' : token
    });
  }

  postForm(form: any){
    console.log(form)
    this.usersService.postPatient(form).subscribe(data =>{
        // console.log(data)
        let respuesta:Response =data
        if(respuesta.status=='ok'){
          // this.alertas.showSuccess('Paciente Agregado Exitosamente', 'Exito!!')
          alert("Paciente Agregado Exitosamente'")
           this.close();

        }else{
          // this.alertas.showError(respuesta.result.error_msg, 'Error')
          alert("Hubo un error'")
        }
        this.close();
    })
  }

  close(){
    this.router.navigate(['home'])
  }
}
