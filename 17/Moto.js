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
exports.Moto = void 0;
var Vehiculo_1 = require("./Vehiculo");
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marca, modelo, anio, patente, color, cilindrada) {
        var _this = _super.call(this, marca, modelo, anio, patente, color) || this;
        _this.cilindrada = cilindrada;
        return _this;
    }
    Moto.prototype.toString = function () {
        return "Datos de la moto - Marca: ".concat(this.marca, " | Modelo: ").concat(this.modelo, " | A\u00F1o: ").concat(this.anio, " | Cilindrada: ").concat(this.cilindrada, " CC |Patente: ").concat(this.patente, " | Color: ").concat(this.color);
    };
    return Moto;
}(Vehiculo_1.default));
exports.Moto = Moto;
