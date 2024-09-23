"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bateria = /** @class */ (function () {
    function Bateria(cargaActual) {
        this.cargaActual = cargaActual;
    }
    Bateria.prototype.mostrarCargaActual = function () {
        return "Bater\u00EDa: ".concat(this.cargaActual);
    };
    Bateria.prototype.cargarBateria = function (carga) {
        this.cargaActual += carga;
        if (this.cargaActual > 100) {
            this.cargaActual = 100;
        }
    };
    Bateria.prototype.descargarBateria = function (descarga) {
        this.cargaActual -= descarga;
        if (this.cargaActual < 0) {
            this.cargaActual = 0;
        }
    };
    return Bateria;
}());
exports.default = Bateria;
