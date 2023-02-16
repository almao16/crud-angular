import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'
import {  ListaPaciente, Paciente, Response } from '../../usuario';
import { UsersService } from '../../services/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-form-users-edit',
  templateUrl: './form-users-edit.component.html',
  styleUrls: ['./form-users-edit.component.scss']
})
export class FormUsersEditComponent implements OnInit {

  constructor(private usersService: UsersService, private router:Router, private activerouter:ActivatedRoute) { }


  datosPacientes: Paciente | undefined;
  editForm = new FormGroup ({
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

  ngOnInit(): void {

    let pacienteid = this.activerouter.snapshot.paramMap.get('id')!;
    let token = this.getToken();
    this.usersService.getPatient(pacienteid).subscribe(data => {
    this.datosPacientes = data[0];
      console.log("hola soy",this.datosPacientes)
      this.editForm.setValue({
        'pacienteId' : pacienteid,
        'dni' : this.datosPacientes?.DNI!,
        'nombre' : this.datosPacientes?.Nombre!, 
        'direccion' : this.datosPacientes?.Direccion!,
        'codigoPostal' : this.datosPacientes?.CodigoPostal!,
        'telefono' : this.datosPacientes?.Telefono!,
        'genero' : this.datosPacientes?.Genero!,
        'fechaNacimiento' : this.datosPacientes?.FechaNacimiento!,
        'correo' : this.datosPacientes?.Correo!,
        'token' : token,
      })
      console.log(this.editForm.value)
       console.log(pacienteid)
      console.log(token)
    })
    // console.log(pacienteid)
    // console.log(token)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  postForm(form: any){
    this.usersService.putPatient(form).subscribe(data =>{
        console.log(data)
        let respuesta:Response =data
        if(respuesta.status=='ok'){
          // this.alertas.showSuccess('Paciente Actualizado Exitosamente', 'Exito!!')
          
          alert('Paciente Actualizado Exitosamente')
          this.close();
        }else{
          alert('Hubo un error')
        }
        // this.close();
    })
  }
  delete(){
    console.log('eliminado')
    let datos:any = this.editForm.value;
    this.usersService.delete(datos).subscribe(data =>{
      let respuesta:Response =data
      if(respuesta.status=='ok'){
        // this.alertas.showSuccess('Paciente Eliminado Exitosamente', 'Exito!!')
        alert("Paciente Eliminado Exitosamente")
        this.close();
      }else{
        alert("Hubo un Error")
      }
      console.log(data)
      
    });
  }
  close(){
    this.router.navigate(['home'])
  }


  closeSesion(){
    if(localStorage.getItem('token')){
      localStorage.clear()
      this.router.navigate(['login'])
    }
  }
}
