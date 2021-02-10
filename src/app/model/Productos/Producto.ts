

export interface Productos
{
    idProducto?: number,
    nombreProducto: string;
    codigoBarrasProducto: string;
    descripcionProducto: string;
    caracteristicasProducto: string;
    existenciaProducto: number;
    precioProducto: number;
    idProveedorFK: number;
    nombreImagen: string;
   
    
}