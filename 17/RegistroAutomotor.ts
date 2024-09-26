import Vehiculo from "./Vehiculo";

class RegistroAutomor {
    public vehiculos : Vehiculo[];

    constructor() {
        this.vehiculos = [];
    }

    public agregarVehiculo(vehiculo : Vehiculo) : void {
        this.vehiculos.push(vehiculo);
        console.log(`Vehiculo agregado. ${vehiculo.toString()}`)
    }
}