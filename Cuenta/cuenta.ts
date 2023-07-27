export class Persona{
    nombre : string
    edad: number

    constructor(nombre: string, edad: number){
        this.nombre = nombre
        this.edad = edad
    }

    public getNombre(): string {
        return this.nombre
    }
    public getEdad(): number {
        return this.edad
    }

    public setNombre(nombre: string){
        this.nombre= nombre 
    }
    public setEdad(edad: number){
        return this.edad
    }
}
export class Cuenta {
        titular: Persona
        valorActual: number

    constructor(titular: Persona, valorActual: number){
        this.titular = titular
        this.valorActual = valorActual
        
    }

    public getTitular(): Persona{
        return this.titular
    }
    public getValorActual(): number{
        return this.valorActual
    }
    

    public setTitular(titular: Persona){
        this.titular = titular
    }
    public setValorActual(valorActual: number){
        this.valorActual = valorActual
    }
    public mostrar(): void {
        console.log("Titular: ", this.titular.nombre),
        console.log("Edad del titular: ", this.titular.edad),
        console.log("Valor actual: ", this.valorActual)
     }
    public ingresar(cantidad1: number): void {
        if (cantidad1 < 0) {
          console.log("No es válido el valor.");
        } else {
            const valorInicial = this.valorActual
          this.valorActual += cantidad1;
          console.log("Valor actual:", valorInicial);
          console.log("Valor incrementado:", cantidad1);
          console.log("Valor total:", this.valorActual);
        }
    }
    public retirar(cantidad2: number): void{
        if(cantidad2 < 0){
            console.log("No es valido el valor")
        } else {
            const valorInicial = this.valorActual
            this.valorActual -= cantidad2
           console.log("Valor inicial:", valorInicial);
            console.log("Valor a retirar:", cantidad2);
            console.log("Valor retirado:", cantidad2);
            console.log("Valor total:", this.valorActual);
        }
    }
}
