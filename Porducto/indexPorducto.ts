import { Producto, procesarProductos } from "./Porducto";

const productos: Producto[] = [
    new Producto(1, "Producto 1", "Tipo 1", 1000, "País 1", 5),
    new Producto(2, "Producto 2", "Tipo 2", 20000, "País 2", 3),
    new Producto(3, "Producto 3", "Tipo 1", 1500, "País 1", 7),
  ];
  
  const resultado = procesarProductos(productos)
  
  console.log("Cantidad total de productos:", resultado.cantidadTotal);
  console.log("Valor total de los productos:", resultado.valorTotal);