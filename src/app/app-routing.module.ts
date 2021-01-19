import { RegistrarProductoComponent } from './view/productos/registrar-producto/registrar-producto.component';
import { MostrarProductoComponent } from './view/productos/mostrar-producto/mostrar-producto.component';
import { RegistrarUsuarioComponent } from './view/usuario/registrar-usuario/registrar-usuario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAppComponent } from './login/login-app/login-app.component';

const routes: Routes =
[
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginAppComponent },
  { path: 'registrar', component: RegistrarUsuarioComponent },
  { path: 'productos', component: MostrarProductoComponent },
  { path: 'agregarProducto', component: RegistrarProductoComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
