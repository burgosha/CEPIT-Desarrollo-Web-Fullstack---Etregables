var Rectangulo = /** @class */ (function () {
    function Rectangulo(altura, ancho) {
        this.altura = altura;
        this.ancho = ancho;
    }
    Rectangulo.prototype.calcular_area = function () {
        return (this.ancho * this.altura);
    };
    Rectangulo.prototype.calcular_perimetro = function () {
        return 2 * (this.ancho + this.altura);
    };
    return Rectangulo;
}());
var nuevoRectangulo = new Rectangulo(10, 5);
console.log("El área del rectángulo es: " + nuevoRectangulo.calcular_area());
console.log("El perímetro del rectángulo es: " + nuevoRectangulo.calcular_perimetro());
