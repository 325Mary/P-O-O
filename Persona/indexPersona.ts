import { Persona } from "./persona";

const persona1 = new Persona("Juan", 30, 1234567890, "Calle 123", "Popayan");
const persona2 = new Persona("Ami", 80, 123490, "Calle 673", "Cali");
const persona3= new Persona("Alexandra", 37, 764567890, "Calle 3843", "Medellin");
const persona4 = new Persona("Maria", 17, 126868890, "Calle 5757", " Popayan");
const persona5 = new Persona("Samir", 76, 12397860, "Calle 7586", "Cartagena");

// Accedemos a los métodos y atributos de la instancia persona1
console.log(persona1.mostrarDatos())
console.log(persona1.mayorEdad())

console.log(persona2.mostrarDatos())
console.log(persona2.mayorEdad())

console.log(persona3.mostrarDatos())
console.log(persona3.mayorEdad())

console.log(persona4.mostrarDatos())
console.log(persona4.mayorEdad())

console.log(persona5.mostrarDatos())
console.log(persona5.mayorEdad())
