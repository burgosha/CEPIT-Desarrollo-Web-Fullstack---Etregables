import Vehiculo from "./Vehiculo";

export class Moto extends Vehiculo {
    private cilindrada : number;

    public constructor(marca : string, modelo : string, anio : number, patente : string,  color : string , cilindrada : number) {
        super(marca, modelo, anio, patente, color);
        this.cilindrada = cilindrada;
    }

    public toString(): string {
        return `Datos de la moto - Marca: ${this.marca} | Modelo: ${this.modelo} | Año: ${this.anio} | Cilindrada: ${this.cilindrada} CC |Patente: ${this.patente} | Color: ${this.color}`
    }
}