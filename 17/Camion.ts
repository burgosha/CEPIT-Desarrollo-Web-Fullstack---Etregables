import Vehiculo from "./Vehiculo";

class Camion extends Vehiculo {
    private carga : number;

    constructor(marca : string, modelo : string, anio : number, patente : string, carga: number) {
        super(marca, modelo, anio, patente);
        this.carga = carga;
    }
}