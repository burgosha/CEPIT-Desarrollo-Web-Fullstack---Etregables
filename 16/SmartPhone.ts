import Telefono from "./Telefono";
import Bateria from "./Bateria";

class SmartPhone extends Telefono {

    sistemOperativo: string;
    conectividad: string;
    alamcenamientoInterno: number;
    ram : number;

    public constructor( marca : string, modelo : string, numeroTelefono : number, bateria : Bateria, sistemaOperativo : string, almacenamientoIntero : number, ram : number) {

        super(marca, modelo, numeroTelefono, bateria);

        this.sistemOperativo = sistemaOperativo;
        this.alamcenamientoInterno = almacenamientoIntero;
        this.ram = ram;
    }

    public sacarFoto(): string {
        this.bateria.descargarBateria(10);
        return "Foto guardada en la galería."
    }

    public enviarMensaje(numeroContacto: number, mensaje : string) {
        this.bateria.descargarBateria(5);
        return  `Mensaje: ${mensaje}. Enviado a: ${numeroContacto}`
    }

}

let bateria = new Bateria(80);
let iphone15 = new SmartPhone('Apple', 'iPhone 15', 2236935530, bateria, 'iOS', 128, 12);

console.log(iphone15.obtenerMarca());
console.log(iphone15.obtenerNumero());
console.log(iphone15.bateria.mostrarCargaActual());
console.log(iphone15.enviarMensaje(2236995533, "Hola contestame cuando puedas. Gracias."));
console.log(iphone15.sacarFoto());
console.log(iphone15.bateria.mostrarCargaActual());
