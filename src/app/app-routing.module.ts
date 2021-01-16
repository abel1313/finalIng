import { RegistrarUsuarioComponent } from './view/usuario/registrar-usuario/registrar-usuario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAppComponent } from './login/login-app/login-app.component';

const routes: Routes =
[
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginAppComponent },
  { path: 'registrar', component: RegistrarUsuarioComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
