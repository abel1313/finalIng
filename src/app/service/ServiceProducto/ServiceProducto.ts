import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

export class ServiceProducto
{
    private URI_JAVA_Productos = 'http://localhost:8080/productos';

    constructor(private http: HttpClient){}

    count$ = new EventEmitter<number>();

    // ------------------------------ Productos ------------------------------------------ //

  getProductoAll()
  {
    
    return this.http.get(`${this.URI_JAVA_Productos}/all`)
  }
  getOneProduct(nombreProducto:string)
  {
    //console.log(`${this.URI_JAVA_Productos}/all/${nombreProducto}`);
    return this.http.get(`${this.URI_JAVA_Productos}/one/${nombreProducto}`);
  }
      // Returns an observable 
      saveProduct(file: Object):Observable<any> { 
  
        //console.log(file);
        
           // Make http post request over api 
           // with formData as req 
           return  this.http.post(this.URI_JAVA_Productos, file);
       } 
             // Returns an observable 


  // ------------------------------ Productos ------------------------------------------ //

    


}

