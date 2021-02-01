import { AgregarPermisoAppComponent } from './view/permisos/agregar-permiso-app/agregar-permiso-app.component';
import { AgregarPersonaAppComponent } from './view/persona/agregar-persona-app/agregar-persona-app.component';
import { RegistrarProductoComponent } from './view/productos/registrar-producto/registrar-producto.component';
import { MostrarProductoComponent } from './view/productos/mostrar-producto/mostrar-producto.component';
import { RegistrarUsuarioComponent } from './view/usuario/registrar-usuario/registrar-usuario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAppComponent } from './login/login-app/login-app.component';
import { AgregarDireccionAppComponent } from './view/direcciones/agregar-direccion-app/agregar-direccion-app.component';
import { ConsultarProductoComponent } from './view/productos/consultar-producto/consultar-producto.component';

const routes: Routes =
[
  { path: '', redirectTo: 'permiso', pathMatch: 'full' },
  { path: 'login', component: LoginAppComponent },
  { path: 'registrar', component: RegistrarUsuarioComponent },
  { path: 'productos', component: MostrarProductoComponent },
  { path: 'consultarProductos', component: ConsultarProductoComponent },
  { path: 'agregarProducto', component: RegistrarProductoComponent },
  { path: 'persona', component: AgregarPersonaAppComponent },
  { path: 'direccion', component: AgregarDireccionAppComponent },
  { path: 'permiso', component: AgregarPermisoAppComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
