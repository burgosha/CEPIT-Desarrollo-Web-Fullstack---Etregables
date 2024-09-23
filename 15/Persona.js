"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Domicilio_1 = require("./Domicilio");
var Persona = /** @class */ (function () {
    function Persona(apellido, nombre, edad, domicilio) {
        this.apellido = apellido;
        this.nombre = nombre;
        this.edad = edad;
        this.domicilio = domicilio;
    }
    Persona.prototype.datosPersona = function () {
        return "Datos Personales:\n Nombre completo: ".concat(this.apellido, ", ").concat(this.nombre, "\n Edad: ").concat(this.edad, "\n Domicilio: ").concat(this.domicilio.obtenerDomicio());
    };
    return Persona;
}());
var domicilioCasa = new Domicilio_1.default("Av. Siempreviva", 742, "Springfield", "UEA7150");
var persona1 = new Persona("Simpson", "Homero", 38, domicilioCasa);
console.log(persona1.datosPersona());
