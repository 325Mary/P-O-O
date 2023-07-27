//  Representacion clase persona
export class Persona {
    private nombre: string
    private edad : number
    private telefono : number
    private direccion : string
    private ciudad : string

    constructor(nombre: string, edad: number, telefono: number, direccion: string, ciudad: string){
        this.nombre = nombre
        this.edad = edad
        this.telefono = telefono
        this.direccion = direccion
        this.ciudad = ciudad
    }
    public getNombre(): string{
        return this.nombre
    }
    public getEdad(): number{
        return this.edad
    }
    public getTelefono(): number{
        return this.telefono
    }
    public getDireccion(): string{
        return this.direccion
    }
    public getCiudad(): string{
        return this.ciudad
    }

    public setNombre(nombre: string){
        this.nombre = nombre
    }
    public setEdad(edad: number){
        this.edad = edad
    }
    public setTelefono(telefono: number){
        this.telefono = telefono
    }
    public setDireccion(direccion: string){
        this.direccion = direccion
    }
    public setCiudad(cuidad: string){
        this.ciudad = this.ciudad
    }


    public mostrarDatos(): void {
        console.log("Nombre: ", this.nombre,
        "\nEdad: "+ this.edad,
        "\nTelefono: "+this.telefono,
        "\nDireccion: "+ this.direccion,
        "\nCiudad: "+ this.ciudad
        );
    }
    
    
    public mayorEdad(): void {
        if (this.edad >= 18) {
            console.log("Es mayor de edad.");
        } else {
            console.log("Es menor de edad.");
        }
    }
}


