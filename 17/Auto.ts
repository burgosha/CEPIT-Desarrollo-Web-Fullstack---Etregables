import Vehiculo from "./Vehiculo";

export class Auto extends Vehiculo {
    protected segmento : string // ej. sedan, SUV, 
    protected puertas : number;
    protected alarma : boolean;

    public constructor(marca : string, modelo : string, anio : number, patente : string, color : string , segmento : string, puertas : number, alarma : boolean) {
        super(marca, modelo, anio, patente, color);
        this.segmento = segmento;
        this.puertas = puertas;
        this.alarma = alarma;
    }

    setAlarma(alarma : boolean) : void {
        this.alarma = alarma;
    }

    public toString(): string {
        return `Datos del auto - Marca: ${this.marca} | Modelo: ${this.modelo} | Año: ${this.anio} | Tipo: ${this.segmento} | Puertas: ${this.puertas} | Patente: ${this.patente} | Alarma:${this.alarma ? 'Si' : 'No'} | Color: ${this.color}`
    }
}