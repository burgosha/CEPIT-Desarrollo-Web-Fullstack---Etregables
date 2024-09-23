export default class Bateria {
    
    cargaActual : number;

    public constructor(cargaActual : number) {
        this.cargaActual = cargaActual;
    }

    public mostrarCargaActual() {
        return `Batería: ${this.cargaActual}`
    }

    public cargarBateria(carga : number) {
        this.cargaActual += carga;
        if(this.cargaActual > 100) {
            this.cargaActual = 100
        }
    }

    public descargarBateria(descarga : number) {
        this.cargaActual -= descarga;
        if(this.cargaActual < 0) {
            this.cargaActual = 0
        }
    }

}