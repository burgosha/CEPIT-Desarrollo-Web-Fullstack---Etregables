import Domicilio from "./Domicilio";

class Persona {
    private apellido : string;
    private nombre : string;
    private edad : number;
    private domicilio : Domicilio;

    public constructor(apellido: string, nombre : string, edad : number, domicilio : Domicilio) {
        this.apellido = apellido;
        this.nombre = nombre;
        this.edad = edad;
        this.domicilio = domicilio;
    }

    public datosPersona() : string {
        return `Datos Personales:\n Nombre completo: ${this.apellido}, ${this.nombre}\n Edad: ${this.edad}\n Domicilio: ${this.domicilio.obtenerDomicio}`
    }
    
}
