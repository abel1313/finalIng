import { Usuario } from './../model/Usuarios/Usuario';
import { Observable } from 'rxjs';
import { EventEmitter, Injectable } from '@angular/core';

// 1ro importar el modulo de http para las solicitudes del cliente
import { HttpClient } from '@angular/common/http';
import { ServiceProducto } from './ServiceProducto/ServiceProducto';
import { ServiceVenta } from './ServiceProducto/ServiceVenta';




@Injectable({
  providedIn: 'root'
})
export class ServiceAppService {

  producto$ = new EventEmitter();



// Uri para comunicarse con el servidor en JAVA

private URI_JAVA = 'http://localhost:3000/ferreteria';
 private URI_JAVA_Productos = 'http://localhost:8080/productos';

private URI_JAVA_USUARIOS = 'http://localhost:8080/ferreteria/usuarios';

// 2do Iniciar el contructor con las solicitudes del cliente
  constructor(private http: HttpClient) { }

  // 3ero Métodos del cliente

  // ------------------------------ Usuarios ------------------------------------------ //
  obtenerUsuario(idUsurio: number): Observable<Usuario>
  {
    return this.http.get(`${this.URI_JAVA}/usuario/login/${idUsurio}`);
  }
  getOneUsuario(usr: object)
  {
 // console.log(usr);
    //console.log(`${this.URI_JAVA_Productos}/all/${nombreProducto}`);
    return this.http.post(`${this.URI_JAVA_USUARIOS}`, usr);
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
// ------------------------------ Usuarios ------------------------------------------ //

 generarDetalle(idProducto: number) { 
  return this.http.post(`${this.URI_JAVA_Productos}/generarDetalle/${idProducto}`, 2);
} 


serviceProd = new ServiceProducto(this.http);

serviceVenta = new ServiceVenta(this.http);



}
