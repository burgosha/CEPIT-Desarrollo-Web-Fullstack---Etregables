"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Telefono = /** @class */ (function () {
    function Telefono(marca, modelo, numeroTelefono, bateria) {
        this.marca = marca;
        this.modelo = modelo;
        this.numeroTelefono = numeroTelefono;
        this.bateria = bateria;
    }
    Telefono.prototype.obtenerMarca = function () {
        return this.marca;
    };
    Telefono.prototype.obtenerModelo = function () {
        return this.modelo;
    };
    Telefono.prototype.obtenerNumero = function () {
        return this.numeroTelefono;
    };
    Telefono.prototype.cambiarNumero = function (nuevoNumeroTelefono) {
        this.numeroTelefono = nuevoNumeroTelefono;
    };
    Telefono.prototype.realizarLlamada = function (numeroDestino) {
        this.bateria.descargarBateria(5);
        return "Llamando al n\u00FAmero ".concat(numeroDestino);
    };
    return Telefono;
}());
exports.default = Telefono;
