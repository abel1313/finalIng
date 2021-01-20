import { AgregarPersonaAppComponent } from './view/persona/agregar-persona-app/agregar-persona-app.component';
import { RegistrarProductoComponent } from './view/productos/registrar-producto/registrar-producto.component';
import { MostrarProductoComponent } from './view/productos/mostrar-producto/mostrar-producto.component';
import { RegistrarUsuarioComponent } from './view/usuario/registrar-usuario/registrar-usuario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAppComponent } from './login/login-app/login-app.component';
import { AgregarDireccionAppComponent } from './view/direcciones/agregar-direccion-app/agregar-direccion-app.component';

const routes: Routes =
[
  { path: '', redirectTo: 'direccion', pathMatch: 'full' },
  { path: 'login', component: LoginAppComponent },
  { path: 'registrar', component: RegistrarUsuarioComponent },
  { path: 'productos', component: MostrarProductoComponent },
  { path: 'agregarProducto', component: RegistrarProductoComponent },
  { path: 'persona', component: AgregarPersonaAppComponent },
  { path: 'direccion', component: AgregarDireccionAppComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
