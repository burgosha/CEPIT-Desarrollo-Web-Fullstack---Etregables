"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, anio, patente, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.patente = patente;
        this.color = color;
    }
    Vehiculo.prototype.toString = function () {
        return "Datos veh\u00EDculo - Marca: ".concat(this.marca, " | Modelo: ").concat(this.modelo, " | A\u00F1o: ").concat(this.anio, " | Patente: ").concat(this.patente, " | Color: ").concat(this.color);
    };
    // Getters
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.getAnio = function () {
        return this.anio;
    };
    Vehiculo.prototype.getColor = function () {
        return this.color;
    };
    // Setters
    Vehiculo.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    Vehiculo.prototype.setColor = function (color) {
        this.color = color;
    };
    return Vehiculo;
}());
exports.default = Vehiculo;
