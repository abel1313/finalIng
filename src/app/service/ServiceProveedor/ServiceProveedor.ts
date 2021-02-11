import { HttpClient } from "@angular/common/http";
import { UriJava } from "src/URISERVER/UriJava";


import { ServiceAppService } from "../service-app.service";


export class ServiceProveedor
{
    
    constructor(private http: HttpClient){}
    
    private uri = new UriJava();
 
     obtenerProveedores()
    {
        
        return this.http.get(`${this.uri.UriJavaFerreteria}/proveedor/all`);
    }


}