import Vehiculo from "./Vehiculo";

export class Camion extends Vehiculo {
    private carga : number;

    constructor(marca : string, modelo : string, anio : number, patente : string,  color : string , carga: number) {
        super(marca, modelo, anio, patente, color);
        this.carga = carga;
    }

    public toString(): string {
        return `Datos de la camion - Marca: ${this.marca} | Modelo: ${this.modelo} | Año: ${this.anio} |Carga: ${this.carga} CC | Patente: ${this.patente} | Color: ${this.color}`
    }
}