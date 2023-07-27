export class Operaciones{
    private numero1: number
    private numero2: number

    constructor(numero1: number, numero2: number){
        this.numero1 = numero1
        this.numero2 = numero2
    }
    public getNumero1():number{
        return this.numero1
    }
    public getNumero2(): number{
        return this.numero2 
    }

    public setNumero1(numero1: number){
        this.numero1 = numero1
    }
    public setNumero2(numero2: number){
        this.numero2 = numero2
    }

    suma(): number{
        return this.numero1 + this.numero2
    }
    resta(): number{
        return this.numero1 - this.numero2 
    }
    multiplicacion(): number{
        return this.numero1 * this.numero2 
    }
    division(): number | string{
         if(this.numero2 !== 0){
            return this.numero1 / this.numero2
         } else {
            return "No es posible dividir entre cero"
         }

    }
}
