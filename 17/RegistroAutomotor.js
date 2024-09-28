"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Auto_1 = require("./Auto");
var Moto_1 = require("./Moto");
var Camion_1 = require("./Camion");
var RegistroAutomor = /** @class */ (function () {
    function RegistroAutomor() {
        this.vehiculos = [];
    }
    RegistroAutomor.prototype.agregarVehiculo = function (vehiculo) {
        this.vehiculos.push(vehiculo);
        console.log("Vehiculo agregado. ".concat(vehiculo.toString()));
    };
    RegistroAutomor.prototype.buscarVehiculo = function (patente) {
        return this.vehiculos.find(function (vehiculo) { return vehiculo.getPatente() === patente; });
    };
    RegistroAutomor.prototype.modificarVehiculo = function (patente, datosActualizados) {
        var vehiculo = this.buscarVehiculo(patente);
        if (!vehiculo) {
            console.log("Veh\u00EDculo con patente ".concat(patente, " no encontrado."));
            return;
        }
        if (datosActualizados.color) {
            vehiculo.setColor(datosActualizados.color);
        }
        // if (datosActualizados.patente) {
        //     vehiculo.setPatente(datosActualizados.patente);
        // }
        console.log("Veh\u00EDculo con patente ".concat(patente, " ha sido actualizado."));
    };
    RegistroAutomor.prototype.eliminarVehiculo = function (patente) {
        this.vehiculos = this.vehiculos.filter(function (v) { return v.getPatente() !== patente; });
    };
    RegistroAutomor.prototype.mostrarVehiculos = function () {
        var vehiculos = [];
        this.vehiculos.forEach(function (vehiculo) { vehiculos.push(vehiculo.toString()); });
        return vehiculos;
    };
    //getter
    RegistroAutomor.prototype.getVehiculos = function () {
        return this.vehiculos;
    };
    return RegistroAutomor;
}());
var registro = new RegistroAutomor();
//Instanciamos una moto
var moto1 = new Moto_1.Moto("Honda", "Wave", 2024, "HQP123", "rojo", 110);
var auto1 = new Auto_1.Auto("Renault", "Sandero", 2008, "HQP232", "azul", "sedan", 5, true);
var camion1 = new Camion_1.Camion("Scania", "F100", 1998, "HQP456", "naranja", 3500);
//Agregamos los vehículos al registro
registro.agregarVehiculo(moto1);
registro.agregarVehiculo(auto1);
registro.agregarVehiculo(camion1);
// console.log(registro.getVehiculos())
//Mostrar el registro completo
console.log(registro.mostrarVehiculos());
//Busqueda de vehiculo
console.log(registro.buscarVehiculo("HQP123"));
//Modificamos un registro
registro.modificarVehiculo("HQP123", { color: "azul" });
//Eliminamos un vehiculo
registro.eliminarVehiculo("HQP456");
//Mostramos vehiculos
console.log(registro.mostrarVehiculos());
