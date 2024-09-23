class Rectangulo {
    private altura : number;
    private ancho: number;

    public constructor(altura: number, ancho: number) {
        this.altura = altura;
        this.ancho = ancho;
    }

    public calcular_area() : number {
        return (this.ancho * this.altura);
    }

    public calcular_perimetro() : number {
        return 2 * (this.ancho + this.altura);
    }
}

let nuevoRectangulo = new Rectangulo(10,5);
console.log("El área del rectángulo es: " + nuevoRectangulo.calcular_area());
console.log("El perímetro del rectángulo es: " + nuevoRectangulo.calcular_perimetro());