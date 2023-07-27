import { Operaciones } from "./Operaciones";
const operacion1 = new Operaciones(10, 5)
const operacion2 = new Operaciones(20, 7)
const operacion3 = new Operaciones(8, 3)
const operacion4 = new Operaciones(15, 2)
const operacion5 = new Operaciones(12, 4)

console.log("suma: ", operacion1.suma())
console.log("Resta:", operacion2.resta())
console.log("Multiplicación:", operacion3.multiplicacion())
console.log("División:", operacion4.division())
