import Vehiculo from "./Vehiculo";

class Auto extends Vehiculo {
    private tipo : string
    private puertas : number;

    public constructor(marca : string, modelo : string, anio : number, patente : string, tipo : string, puertas : number) {
        super(marca, modelo, anio, patente);
        this.tipo = tipo;
        this.puertas = puertas;
    }

    public toString(): string {
        return `Datos del auto:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nAño: ${this.anio}\nTipo: ${this.tipo}\nPuertas: ${this.puertas}\nPatente: ${this.patente}`
    }
}