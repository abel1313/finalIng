import { Component, HostBinding, NgZone, OnInit } from '@angular/core';
import { ServiceAppService } from "../../../service/service-app.service";
import { ConsultarProductoComponent } from "../../productos/consultar-producto/consultar-producto.component";
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
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

  constructor(private service: ServiceAppService,private session: SessionStorageService, private route: Router,private ngZone: NgZone) { }
  valueCaja = 
  {
    nameCaja : ''
  }
  values = '';

  prod: any = [];
mostrando = false;

  ngOnInit(): void 
  {
    this.getAllProducts();
  }

  palabra: string = "";

  onKey(event: any) 
  {

    //console.log(event.target.value.length + ' Antes de ');

    if(event.target.value.length > 0)
    {
      this.prod =  [];

      this.service.getOneProduct(event.target.value)
      .subscribe
      (
        res => 
        {
         // Cookies.set('productos', res,{expires: 2});
          //localStorage.setItem('tutorial', 'Como utilizar el LocalStorage en Angular');
         // this.prod = res;
        //  console.log(this.prod.length);
          this.ngZone.runOutsideAngular(() => {
            setTimeout(() => {
              
              //  this.mostrando = true;
              this.prod =  res;
  
            });
          });
          
        },
        err => console.log(err)
      );


    }else if(event.target.value == 0)
              {

              //  console.log('entro ');
                this.getAllProducts();
              }

     // console.log(this.palabra);
      //console.log("Este es " +this.valueCaja.nameCaja);
 

    
    
      //this.values += event.target.value + ' | ';
  }

    invalidSession()
  {

  }

  public getAllProducts()
  {
    this.service.getProductoAll()
      .subscribe
      (
        res => 
        {
          this.prod = res;
          console.log(this.prod);
          this.ngZone.runOutsideAngular(() => {
            setTimeout(() => {
              if(this.prod.length > 0)
              {
              //  this.mostrando = true;
                this.prod
            //    sessionStorage.setItem('prod',JSON.stringify(res));
  
               // console.log('Paso '+this.mostrando);
  
              //  $('#componentConsulta').load('../consultar-producto/consultar-producto.component.html');
              }
  
            });
          });
  
          
          
       
          
        },
        err => console.log(err)
      );

  }



}



