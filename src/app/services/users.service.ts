import { Injectable } from '@angular/core';
import { Usuario, UsuariosGetApi, UsuariosListApi, UsuariosListItems } from '../usuario';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient : HttpClient) {    
    console.log("Servicio http ")
  }

  private REST_API_SERVERLIST = "https://as-humedal-api.azurewebsites.net/Users/GetList?Page=1&Rows=232324";
  private REST_API_SERVERGET = "https://as-humedal-api.azurewebsites.net/Users/Get?IdUserLanding=";


 public getUsuarios(){
   return this.httpClient.get<UsuariosListApi>(this.REST_API_SERVERLIST)
   .pipe(map((ListItems) => ListItems.data.items));
 }

 public getUsuario(id: number) {
  return this.httpClient.get<UsuariosGetApi>(this.REST_API_SERVERGET+id).pipe(map((resp) => resp.data));
 }
}
