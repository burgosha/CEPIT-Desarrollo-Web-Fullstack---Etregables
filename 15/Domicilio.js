"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Domicilio = /** @class */ (function () {
    function Domicilio(calle, numero, localidad, codigoPostal) {
        this.calle = calle;
        this.numero = numero;
        this.localidad = localidad;
        this.codigoPostal = codigoPostal;
    }
    Domicilio.prototype.obtenerDomicio = function () {
        return "Domicilio: ".concat(this.calle, " ").concat(this.numero, ", ").concat(this.localidad, ", C.P.: ").concat(this.codigoPostal);
    };
    return Domicilio;
}());
exports.default = Domicilio;
