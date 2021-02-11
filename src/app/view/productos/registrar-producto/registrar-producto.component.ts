import { Component, HostBinding, OnInit, NgModule } from '@angular/core';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith, debounceTime} from 'rxjs/operators';



import { DomSanitizer } from '@angular/platform-browser';
import { ngfModule, ngf } from "angular-file";
import { FileUploader } from 'ng2-file-upload';
import { Productos } from 'src/app/model/Productos/Producto';
import { ServiceAppService } from 'src/app/service/service-app.service';
import * as $ from 'jquery';
import { IProveedor } from "../../../model/Proveedores/IProveedor";

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent implements OnInit {
@HostBinding('class') class="row"

public visualizar:string;
public archivos: any = [];

// Variable to store shortLink from api response 
shortLink: string = ""; 
loading: boolean = false; // Flag variable 
file: File = null; // Variable to store file 

myControl = new FormControl();
options: string[] = ['One', 'Two', 'Three'];
filteredOptions: Observable<string[]>;


  constructor(private sanitizer: DomSanitizer, private serviceProducto: ServiceAppService) {}

  producto: Productos = 
  {
    idProducto: 0,
    nombreProducto: '',
    codigoBarrasProducto: '',
    descripcionProducto: '',
    caracteristicasProducto: '',
    existenciaProducto: 0,
    precioProducto: 0,
    idProveedorFK: 0,
    nombreImagen: '',
  }

  proveedor: any = []


  ngOnInit(): void 
  {
    this.mostrarProveedores();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  
public onUpload() { 
  try {
    this.loading = true;
    const formularioDeDatos = new FormData();
    this.archivos.forEach((archivo: string | Blob) => {
      formularioDeDatos.append('files', archivo)
    });
    // formularioDeDatos.append('_id', 'MY_ID_123')
    
    this.producto.nombreImagen = this.archivos[0].name;
    
    
   

    this.serviceProducto.serviceProd.saveProduct({prod: this.producto,formul :formularioDeDatos})
      .subscribe(res => {
        return false;
        this.loading = false;
        console.log('Respuesta del servidor', res);

      }, () => {
        this.loading = false;
        alert('Error');
      })
  } catch (e) {
    this.loading = false;
    console.log('ERROR', e);

  }
} 


cancelUpload()
{
  
  this.clearImage();
  this.loading = false;
}
onChange(event: any): any {
  
  const archivoCapturado = event.target.files[0];
 
  this.archivos.push(archivoCapturado);
  this.extraerBase64(archivoCapturado).then((imagen: any) => {
    this.visualizar = imagen.base;


/*
    fs.copy(this.visualizar, '/home/trece/Documents/projectFerreteria/ferreteria/Angular/Proyectos/proyecto-practicando/app-new/src/assets/ImagenesFerreteria/ImagenesProductos')
  .then(() => console.log('success!'))
  .catch(err => console.error(err))

*/

   // console.log(imagen);

  })
  this.archivos.push(archivoCapturado)
  // 
   

}

extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
  try {
    const unsafeImg = window.URL.createObjectURL($event);
    const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
    const reader = new FileReader();
    reader.readAsDataURL($event);
    reader.onload = () => {
      resolve({
        base: reader.result
      });
    };
    reader.onerror = error => {
      resolve({
        base: null
      });
    };

  } catch (e) {
    return null;
  }
});

 /**
   * Limpiar imagen
   */

  clearImage(): any {
    this.visualizar = '';
    this.archivos = [];
  }


  /**
   * Subir archivo
 

  subirArchivo(): any {

  }
  */

  //método que permite obtener todos los provedores que el servidor regrese
 // sevice para hacer una petición al servidor
  mostrarProveedores()
  {
    this.serviceProducto.serviceProveedor.obtenerProveedores()
    .subscribe
    ( 
      res=> 
      {
        console.log(res);
        this.proveedor = res;
      }
      ,error => 
      console.log(error));

  }


}

