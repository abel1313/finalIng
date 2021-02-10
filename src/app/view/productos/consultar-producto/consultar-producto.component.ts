import { Component, OnInit, HostBinding, NgZone, Input, OnDestroy } from '@angular/core';
import * as Cookies from 'js-cookie';
import * as $ from 'jquery';

import { ServiceAppService } from 'src/app/service/service-app.service';
import { Subscription } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';
 
@Component({
  selector: 'app-consultar-producto',
  templateUrl: './consultar-producto.component.html',
  styleUrls: ['./consultar-producto.component.css']
})
export class ConsultarProductoComponent implements OnInit, OnDestroy {
  //@HostBinding('classCard') class = 'row p-3 border';
  
  constructor( 
    private ngZone: NgZone,
    // Accedemos al service para acceder a los datos del producto
    // Que el back-end le reponde 
    private serviceConsultaProducto: ServiceAppService
    ) { }
    
nameSe: string = '';
calando = false;

// varible para recibir el datos del evento keyup y la inicializamos
public nomProdEventKey: string = '';
// varian;e de ;a siscription para eliminar los observables
nombreSuscription: Subscription;

//@Input()NUEVA;

// Variable para recibir los datos que el back-end regresa como respuesta en el service
public prodComponentConsulta: any = [];


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
    //console.log(this.nomProdEventKey.length);
// Variable de tipo Suscription para recibir la suscription y poder eliminar el observable
// el service serviceConsultaProducto para recibir el evento emitido del mostrar-producto-component
// Y lo guardamos en la variale nomProdEventKey
    this.nombreSuscription = this.serviceConsultaProducto.producto$.subscribe(res => 
      {
        this.nomProdEventKey = res;
       // console.log(this.nomProdEventKey);
        this.getAllProducts(this.nomProdEventKey);

      });
      this.getAllProducts(this.nomProdEventKey);
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


  // Method que permite acceder al back-end que recibe un argumentos y muestre los datos
  public getAllProducts(nomProd: string)
  {
    // Válida que el argumento sea > a 0
      if(nomProd.length > 0 )
      {
        // Variable de Suscription para eliminar el obserbable cuando ya no sea necesario
        // Service: serviceConsultaProducto para obtener uno o varios productos,
        // Segun coincidan
        this.nombreSuscription = this.serviceConsultaProducto.serviceProd.getOneProduct(nomProd)
        .subscribe
        (
          resu =>  // 4.- mostrar-producto-component Si el service es exitoso, el res trae la respuesta
          {
           
           // Cookies.set('productos', res,{expires: 2});
            //localStorage.setItem('tutorial', 'Como utilizar el LocalStorage en Angular');
           // this.prod = res;
          //  console.log(this.prod.length);
  
          // 5.- mostrar-producto-component Optimizar el rendiento al realizar tareas asincronas
            this.ngZone.runOutsideAngular(() => {
              setTimeout(() => {
                
                //  this.mostrando = true;
                // 6.- mostrar-producto-component 
                //El resultado que regresa el back-end y se lo pasa al array para mostrarlo a la vista
                this.prodComponentConsulta =  resu;
    
              });
            });
            
          },
          err => console.log(err)
        );
  
      }else if(nomProd.length == 0)
      {
        // válidar que el argumentos sea igual a 0 para regresar todos los productos
        this.nombreSuscription = this.serviceConsultaProducto.serviceProd.getProductoAll()
        .subscribe
        (
          res => 
          {
            this.prodComponentConsulta = res;
           // console.log(this.mostrarProducto);
            this.ngZone.runOutsideAngular(() => {
              setTimeout(() => {
                if(this.prodComponentConsulta.length > 0)
                {
                //  this.mostrando = true;
                  this.prodComponentConsulta
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
  p: any = [];
      
  siz: number = 0;
  agregarSession(event)
  {

    this.serviceConsultaProducto.serviceVenta.getVenta(parseInt(event.target.value))
    .subscribe
    (
      res => {console.log(res)}, error => console.log(error)
    );
    

    return false;
      for(let o of this.prodComponentConsulta)
      {
        console.log(o.idProducto +" " + parseInt(event.target.value));

          if(o.idProducto === parseInt(event.target.value))
          {
            this.p =  o;
            sessionStorage.setItem('prodSession', JSON.stringify(this.p));
            this.serviceConsultaProducto.serviceProd.count$.emit(this.siz+=1);
            break;
          }
      }
      
  
 
    
  }

  ngOnDestroy(): void 
  {
    this.nombreSuscription.unsubscribe();
  }
  
  invalidSessionCOnsulta()
  {
    console.log('diste');
    sessionStorage.removeItem('prodSession');
  }

}
