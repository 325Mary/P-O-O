import { Persona, Cuenta } from "./cuenta";


const titular = new Persona("Juan", 30);
const cuenta = new Cuenta(titular, 1000);

cuenta.mostrar();
cuenta.ingresar(0);
//cuenta.mostrar();
cuenta.retirar(100);
cuenta.mostrar();
