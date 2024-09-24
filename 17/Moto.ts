import Vehiculo from "./Vehiculo";

class Moto extends Vehiculo {
    private cilindrada : number;

    public constructor(marca : string, modelo : string, anio : number, patente : string, cilindrada : number) {
        super(marca, modelo, anio, patente);
        this.cilindrada = cilindrada;
    }

    public toString(): string {
        return `Datos de la moto:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nAño: ${this.anio}\nCilindrada: ${this.cilindrada}\nPatente: ${this.patente}`
    }
}