import Bateria from "./Bateria";

export default class Telefono {
    private marca : string;
    private modelo : string;
    private numeroTelefono : number;
    public bateria : Bateria;

    public constructor(marca: string, modelo: string, numeroTelefono: number, bateria : Bateria) {
        this.marca = marca;
        this.modelo = modelo;
        this.numeroTelefono = numeroTelefono;
        this.bateria = bateria;
    }

    public obtenerMarca() : string {
        return this.marca;
    }

    public obtenerModelo() : string {
        return this.modelo;
    }

    public obtenerNumero() : number {
        return this.numeroTelefono;
    }

    public cambiarNumero(nuevoNumeroTelefono: number) : void {
        this.numeroTelefono = nuevoNumeroTelefono;
    }

    public realizarLlamada(numeroDestino : number) : string {
        this.bateria.descargarBateria(5)
        return `Llamando al número ${numeroDestino}`
    }
}