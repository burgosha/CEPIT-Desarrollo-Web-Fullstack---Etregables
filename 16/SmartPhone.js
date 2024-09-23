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
var Telefono_1 = require("./Telefono");
var Bateria_1 = require("./Bateria");
var SmartPhone = /** @class */ (function (_super) {
    __extends(SmartPhone, _super);
    function SmartPhone(marca, modelo, numeroTelefono, bateria, sistemaOperativo, almacenamientoIntero, ram) {
        var _this = _super.call(this, marca, modelo, numeroTelefono, bateria) || this;
        _this.sistemOperativo = sistemaOperativo;
        _this.alamcenamientoInterno = almacenamientoIntero;
        _this.ram = ram;
        return _this;
    }
    SmartPhone.prototype.sacarFoto = function () {
        this.bateria.descargarBateria(10);
        return "Foto guardada en la galería.";
    };
    SmartPhone.prototype.enviarMensaje = function (numeroContacto, mensaje) {
        this.bateria.descargarBateria(5);
        return "Mensaje: ".concat(mensaje, ". Enviado a: ").concat(numeroContacto);
    };
    return SmartPhone;
}(Telefono_1.default));
var bateria = new Bateria_1.default(80);
var iphone15 = new SmartPhone('Apple', 'iPhone 15', 2236935530, bateria, 'iOS', 128, 12);
console.log(iphone15.obtenerMarca());
console.log(iphone15.obtenerNumero());
console.log(iphone15.bateria.mostrarCargaActual());
console.log(iphone15.enviarMensaje(2236995533, "Hola contestame cuando puedas. Gracias."));
console.log(iphone15.sacarFoto());
console.log(iphone15.bateria.mostrarCargaActual());
