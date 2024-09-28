"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Vehiculo_1 = require("./Vehiculo");
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(marca, modelo, anio, patente, color, segmento, puertas, alarma) {
        var _this = _super.call(this, marca, modelo, anio, patente, color) || this;
        _this.segmento = segmento;
        _this.puertas = puertas;
        _this.alarma = alarma;
        return _this;
    }
    Auto.prototype.setAlarma = function (alarma) {
        this.alarma = alarma;
    };
    Auto.prototype.toString = function () {
        return "Datos del auto - Marca: ".concat(this.marca, " | Modelo: ").concat(this.modelo, " | A\u00F1o: ").concat(this.anio, " | Tipo: ").concat(this.segmento, " | Puertas: ").concat(this.puertas, " | Patente: ").concat(this.patente, " | Alarma:").concat(this.alarma ? 'Si' : 'No', " | Color: ").concat(this.color);
    };
    return Auto;
}(Vehiculo_1.default));
exports.Auto = Auto;
