export default class Domicilio {
    private calle : string;
    private numero : number;
    private localidad : string;
    private codigoPostal : string;

    public constructor(calle : string, numero : number , localidad : string, codigoPostal: string) {
        this.calle = calle;
        this.numero = numero;
        this.localidad = localidad;
        this.codigoPostal = codigoPostal;
    }

    public obtenerDomicio() : string {
        return `Domicilio: ${this.calle} ${this.numero}, ${this.localidad}, C.P.: ${this.codigoPostal}`
    }
}