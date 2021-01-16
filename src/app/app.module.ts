import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginAppComponent } from './login/login-app/login-app.component';
import { NavAppComponent } from './navegacion/nav-app/nav-app.component';
import { RegistrarUsuarioComponent } from './view/usuario/registrar-usuario/registrar-usuario.component';
import { RegistrarProductoComponent } from './view/productos/registrar-producto/registrar-producto.component';
import { EditarProductoComponent } from './view/productos/editar-producto/editar-producto.component';
import { FooterNavComponent } from './navegacion/footer/footer-nav/footer-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginAppComponent,
    NavAppComponent,
    RegistrarUsuarioComponent,
    RegistrarProductoComponent,
    EditarProductoComponent,
    FooterNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
