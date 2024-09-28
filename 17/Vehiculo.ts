export default class Vehiculo {
    protected marca : string;
    protected modelo : string;
    protected anio : number;
    public patente : string;
    public color: string;

    public constructor(marca : string, modelo : string, anio : number, patente : string, color : string) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.patente = patente;
        this.color = color;
    }

    public toString() : string {
        return `Datos vehículo - Marca: ${this.marca} | Modelo: ${this.modelo} | Año: ${this.anio} | Patente: ${this.patente} | Color: ${this.color}`;
    }

    // Getters
    getPatente(): string {
        return this.patente;
    }

    getMarca(): string {
        return this.marca;
    }

    getModelo(): string {
        return this.modelo;
    }

    getAnio(): number {
        return this.anio;
    }

    getColor() : string {
        return this.color;
    }

    // Setters
    setPatente(patente: string): void {
        this.patente = patente;
    }

    setColor(color : string) : void {
        this.color = color;
    }

}