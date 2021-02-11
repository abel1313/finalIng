import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// 3er paso Agregar/Importar HttpClientMode habilitar el service y agregarlo a imports
import { HttpClientModule } from '@angular/common/http';
// 5to Agregar/Importar la clase servicio para que los service funcione
import { ServiceAppService } from './service/service-app.service';
// 7tmo agregar el modulo de forms para la interpolacion y agregar en imports
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AngularFileUploaderModule } from "angular-file-uploader";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginAppComponent } from './login/login-app/login-app.component';
import { NavAppComponent } from './navegacion/nav-app/nav-app.component';
import { RegistrarUsuarioComponent } from './view/usuario/registrar-usuario/registrar-usuario.component';
import { RegistrarProductoComponent } from './view/productos/registrar-producto/registrar-producto.component';
import { EditarProductoComponent } from './view/productos/editar-producto/editar-producto.component';
import { FooterNavComponent } from './navegacion/footer/footer-nav/footer-nav.component';
import { MostrarProductoComponent } from './view/productos/mostrar-producto/mostrar-producto.component';
import { ConsultarProductoComponent } from './view/productos/consultar-producto/consultar-producto.component';
import { RegistrarEmpleadoComponent } from './view/empleados/registrar-empleado/registrar-empleado.component';
import { MostrarEmpleadoComponent } from './view/empleados/mostrar-empleado/mostrar-empleado.component';
import { ActualizarEmpleadoComponent } from './view/empleados/actualizar-empleado/actualizar-empleado.component';
import { AgregarPersonaAppComponent } from './view/persona/agregar-persona-app/agregar-persona-app.component';
import { EditarPersonaAppComponent } from './view/persona/editar-persona-app/editar-persona-app.component';
import { MostrarPersonaAppComponent } from './view/persona/mostrar-persona-app/mostrar-persona-app.component';
import { AgregarDireccionAppComponent } from './view/direcciones/agregar-direccion-app/agregar-direccion-app.component';
import { EditarDireccionAppComponent } from './view/direcciones/editar-direccion-app/editar-direccion-app.component';
import { MostrarDireccionesAppComponent } from './view/direcciones/mostrar-direcciones-app/mostrar-direcciones-app.component';
import { AgregarPermisoAppComponent } from './view/permisos/agregar-permiso-app/agregar-permiso-app.component';
import { EditarPermisoAppComponent } from './view/permisos/editar-permiso-app/editar-permiso-app.component';
import { MostrarPermisosAppComponent } from './view/permisos/mostrar-permisos-app/mostrar-permisos-app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatAutocompleteModule  } from "@angular/material/autocomplete";
import { MatFormFieldModule  } from "@angular/material/form-field";
import { MatInput  } from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    LoginAppComponent,
    NavAppComponent,
    RegistrarUsuarioComponent,
    RegistrarProductoComponent,
    EditarProductoComponent,
    FooterNavComponent,
    MostrarProductoComponent,
    ConsultarProductoComponent,
    RegistrarEmpleadoComponent,
    MostrarEmpleadoComponent,
    ActualizarEmpleadoComponent,
    AgregarPersonaAppComponent,
    EditarPersonaAppComponent,
    MostrarPersonaAppComponent,
    AgregarDireccionAppComponent,
    EditarDireccionAppComponent,
    MostrarDireccionesAppComponent,
    AgregarPermisoAppComponent,
    EditarPermisoAppComponent,
    MostrarPermisosAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatAutocompleteModule,
    // Permite subir imagenes
    AngularFileUploaderModule,
    // 4to Agregar HttpClientModule para que el service funcione
    HttpClientModule,
    // 7.2 agregar a imports para el forms
    FormsModule,
    BrowserAnimationsModule,
    
    ReactiveFormsModule,
    
    MatFormFieldModule,
    MatInput

  ],
 
  // 6to agregarlo a Prociders para que funcione el service
  providers: [ServiceAppService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }
