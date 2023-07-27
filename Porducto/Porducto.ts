export class Producto {
    
    identificador: number;
    nombre: string;
    tipo: string;
    precio: number;
    país: string;
    cantidad: number;
  
    constructor(identificador: number, nombre: string, tipo: string, precio: number, país: string, cantidad: number) {
      this.identificador = identificador;
      this.nombre = nombre;
      this.tipo = tipo;
      this.precio = precio;
      this.país = país;
      this.cantidad = cantidad;
    }

    getvalorTotal(): number {
      return this.precio * this.cantidad;
    }
  }
  
    export function procesarProductos(productos: Producto[]): { cantidadTotal: number; valorTotal: number } {
    let cantidadTotal = 0;
    let valorTotal = 0;
  
    for (const producto of productos) {
      cantidadTotal += producto.cantidad;
      valorTotal += producto.getvalorTotal();
    }
  
    return { cantidadTotal, valorTotal };
  }

