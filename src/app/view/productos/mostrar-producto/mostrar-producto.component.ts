import { Component, HostBinding, NgZone, OnInit } from '@angular/core';
import { ServiceAppService } from "../../../service/service-app.service";
import { ConsultarProductoComponent } from "../../productos/consultar-producto/consultar-producto.component";
import { LocalStorageService, LocalStorage, SessionStorage, SessionStorageService } from 'angular-web-storage';
import * as $ from 'jquery';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';





@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.css']
})
export class MostrarProductoComponent implements OnInit {
// @HostBinding('class') class = 'row p-3 border';

  constructor
  (
    private service: ServiceAppService,
    
    private route: Router,
    private ngZone: NgZone
    ) { }

    // Objeto con un atributo para almacenar el
  valueCaja = 
  {
    nameCaja : ''
  }
d: any = [];
prodRec: any [];
prodAdd: any = [];
obtenerdatosSesion: any = [];
tam: number = 0;
  // Variable para guardar los productos que se reciba del servicio
  // Component mostrar-producto-component
  mostrarProducto: any = [];

//mostrando = false;

sizeCarrito: number = 0;
  ngOnInit(): void 
  {
   this.d = sessionStorage.getItem('prodSession');
   this.prodRec = (JSON.parse(sessionStorage.getItem('prodSession')));
   this.prodAdd.push(this.prodRec);

    this.obtenerdatosSesion = sessionStorage.getItem('dat');


   const a = this.prodAdd; 
   console.log(typeof(this.obtenerdatosSesion));
   this.tam = this.prodAdd.length;
   this.service.serviceProd.count$
   .subscribe
   (res => 
    {
      this.sizeCarrito = res;
    }
    );
  }
  
// Evento para buscar un producto que recibe un  event
// y emite un obserbable pasandole como argumento el dato que el evento keyup genera
  onKey(event: any) 
  {
    this.service.producto$.emit(event.target.value)
  }

    invalidSession()
  {
    sessionStorage.removeItem('prodSession');
  }
  obtenerDetalle()
  {
      this.service.serviceVenta.getDetalleVenta()
      .subscribe
      (
        res => {console.log(res)}, error => console.log(error)
      );
  }
} 



