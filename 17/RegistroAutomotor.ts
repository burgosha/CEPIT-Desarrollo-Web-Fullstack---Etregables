import Vehiculo from "./Vehiculo";
import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { Camion } from "./Camion";

class RegistroAutomor {
    private vehiculos : Vehiculo[];

    constructor() {
        this.vehiculos = [];
    }

    agregarVehiculo(vehiculo : Vehiculo) : void {
        this.vehiculos.push(vehiculo);
        console.log(`Vehiculo agregado. ${vehiculo.toString()}`)
    }

    buscarVehiculo(patente : string) : Vehiculo | undefined {
        return this.vehiculos.find(vehiculo => vehiculo.getPatente() === patente);
    }

    modificarVehiculo(patente: string, datosActualizados: Partial<Vehiculo>): void {
        const vehiculo = this.buscarVehiculo(patente);
        
        if (!vehiculo) {
            console.log(`Vehículo con patente ${patente} no encontrado.`);
            return;
        }
    
        if (datosActualizados.color) {
            vehiculo.setColor(datosActualizados.color);
        }
        // if (datosActualizados.patente) {
        //     vehiculo.setPatente(datosActualizados.patente);
        // }
    
        console.log(`Vehículo con patente ${patente} ha sido actualizado.`);
    }

    eliminarVehiculo(patente: string): void {
        this.vehiculos = this.vehiculos.filter(v => v.getPatente() !== patente);
    }

    mostrarVehiculos(): string[] {
        let vehiculos : string[] = []
        this.vehiculos.forEach(vehiculo => {vehiculos.push(vehiculo.toString())})
        return vehiculos;
    }

    //getter
    getVehiculos() {
        return this.vehiculos;
    }
}

let registro = new RegistroAutomor();

//Instanciamos una moto
let moto1 = new Moto("Honda", "Wave", 2024, "HQP123", "rojo", 110);
let auto1 = new Auto("Renault", "Sandero", 2008, "HQP232", "azul", "sedan", 5, true);
let camion1 = new Camion("Scania", "F100", 1998, "HQP456", "naranja", 3500)

//Agregamos los vehículos al registro
registro.agregarVehiculo(moto1)
registro.agregarVehiculo(auto1);
registro.agregarVehiculo(camion1);

// console.log(registro.getVehiculos())

//Mostrar el registro completo
console.log(registro.mostrarVehiculos());

//Busqueda de vehiculo
console.log(registro.buscarVehiculo("HQP123"));

//Modificamos un registro
registro.modificarVehiculo("HQP123", {color : "azul"});

//Eliminamos un vehiculo
registro.eliminarVehiculo("HQP456");
//Mostramos vehiculos
console.log(registro.mostrarVehiculos());