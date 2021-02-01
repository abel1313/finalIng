import { Component, OnInit, HostBinding, NgZone, Input } from '@angular/core';
import * as Cookies from 'js-cookie';
import * as $ from 'jquery';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
 
@Component({
  selector: 'app-consultar-producto',
  templateUrl: './consultar-producto.component.html',
  styleUrls: ['./consultar-producto.component.css']
})
export class ConsultarProductoComponent implements OnInit {
  //@HostBinding('classCard') class = 'row p-3 border';
  
  constructor(private session: SessionStorageService, private ngZone: NgZone) { }
nameSe: string = '';
calando = false;

@Input()hero;
public productos: any = [];


  ngOnInit(): void 
  {
    //console.log(this.hero);
    this.nameSe = localStorage.getItem("tutorial");

    if(this.nameSe != "" )
    {
   //   this.productos = Cookies.get('productos');
      this.calando = true;
    //  this.productos = JSON.parse(sessionStorage.getItem('prod'));
      //console.log(this.hero);
    }
    

  }
  invalidSession()
  {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
    
          sessionStorage.removeItem('prod');
          $('#componentConsulta').load('consultat-producto.component.html');

      });
    });

  }


}
