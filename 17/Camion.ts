import Vehiculo from "./Vehiculo";

class Camion extends Vehiculo {
    private carga : number;

    constructor(marca : string, modelo : string, anio : number, patente : string, carga: number) {
        super(marca, modelo, anio, patente);
        this.carga = carga;
    }

    public toString(): string {
        return `Datos de la moto:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nAño: ${this.anio}\nCarga: ${this.carga} CC\nPatente: ${this.patente}`
    }
}