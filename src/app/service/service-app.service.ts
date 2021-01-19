import { Usuario } from './../model/Usuario';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

// 1ro importar el modulo de http para las solicitudes del cliente
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ServiceAppService {

// Uri para comunicarse con el servidor en JAVA

private URI_JAVA = 'http://localhost:3000/ferreteria';

// 2do Iniciar el contructor con las solicitudes del cliente
  constructor(private http: HttpClient) { }

  // 3ero Métodos del cliente
  obtenerUsuario(idUsurio: number): Observable<Usuario>
  {
    return this.http.get(`${this.URI_JAVA}/usuario/login/${idUsurio}`);
  }
  obtenerUsuarios(): any
  {
    return this.http.get(`${this.URI_JAVA}/usuario/login`);
  }
  guardarUsuario(usuario: Usuario): Observable<Usuario>
  {
    return this.http.post(`${this.URI_JAVA}/usuario/login`, usuario);
  }
  eliminarUsuario(id: number): Observable<Usuario>
  {
    return this.http.delete(`${this.URI_JAVA}/usuario/login/${id}`);
  }
  editarUsuario(id: number, updateUsuario: Usuario): Observable<Usuario>
  {
    return this.http.put(`${this.URI_JAVA}/usuario/login/${id}`, updateUsuario);
  }


}
