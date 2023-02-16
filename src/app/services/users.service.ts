import { Injectable } from '@angular/core';
import { Response, Login, ListaPaciente, Paciente} from '../usuario';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient : HttpClient) {    
    console.log("Servicio http ")
  }
 
  private REST_API_SERVERLIST = "https://api.solodata.es/pacientes?page=";
  private REST_API_SERVERGET = "https://api.solodata.es/pacientes?id=";
  private REST_API_SERVERLOGIN = "https://api.solodata.es/auth";
  private REST_API_SERVERPUT = "https://api.solodata.es/pacientes";
 

 login(form:Login):Observable<Response>{
  return this.httpClient.post<Response>(this.REST_API_SERVERLOGIN, form);
}


getPacientes(page:number):Observable<ListaPaciente[]>{
  return this.httpClient.get<ListaPaciente[]>(this.REST_API_SERVERLIST  +page);
}

getPatient(id:string):Observable<Paciente>{
  return this.httpClient.get<Paciente>(this.REST_API_SERVERGET +id);
}


putPatient(form:Paciente):Observable<Response>{
  return this.httpClient.put<Response>(this.REST_API_SERVERPUT, form);
}
delete(form:Paciente):Observable<Response>{
  let Options = {
    headers: new HttpHeaders({
    'content-Type': 'application/json'
  }),
  body:form
}
  return this.httpClient.delete<Response>(this.REST_API_SERVERPUT, Options)
}

postPatient(form:Paciente):Observable<Response>{
  return this.httpClient.post<Response>("https://api.solodata.es/pacientes", form);
}
}
