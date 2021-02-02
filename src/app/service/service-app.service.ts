import { Usuario } from './../model/Usuarios/Usuario';
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
private URI_JAVA_Productos = 'http://localhost:8080/productos';

private URI_JAVA_USUARIOS = 'http://localhost:8080/ferreteria/usuarios';

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
  getProductoAll()
  {
    return this.http.get(`${this.URI_JAVA_Productos}/all`)
  }
  getOneProduct(nombreProducto:string)
  {
    //console.log(`${this.URI_JAVA_Productos}/all/${nombreProducto}`);
    return this.http.get(`${this.URI_JAVA_Productos}/one/${nombreProducto}`);
  }



  // ----------------------- Usuarios ------------------------------ //
  getOneUsuario(usr: object)
  {
 // console.log(usr);
    //console.log(`${this.URI_JAVA_Productos}/all/${nombreProducto}`);
    return this.http.post(`${this.URI_JAVA_USUARIOS}`, usr);
  }
 
}
