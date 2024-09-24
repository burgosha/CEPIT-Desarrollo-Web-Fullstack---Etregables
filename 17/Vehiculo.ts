export default class Vehiculo {
    private marca : string;
    private modelo : string;
    private anio : number;
    private patente : string;

    public constructor(marca : string, modelo : string, anio : number, patente : string) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.patente = patente;
    }

    public toString() : string {
        return `Datos vehículo:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nAño: ${this.anio}\nPatente: ${this.patente}`;
    }
}