//Código ondrag
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
    document.getElementById("leyenda").innerHTML = "¡El cuadrado azul esta siendo arrastrado!";

}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggableElement = document.getElementById(data);
    event.target.appendChild(draggableElement);
    document.getElementById("leyenda").innerHTML = "Arrastra el cuadrado azul al cuadro vecino.";
}
//Código onclick
const cuadradoColor = document.getElementById('coloreable');
const colores = ['blue', 'red', 'green'];
let colorIndice = 0;
function changeColor() {
    colorIndice = (colorIndice + 1 ) % colores.length;
    cuadradoColor.style.backgroundColor = colores[colorIndice];
}
//Código on change
function changeShape() {
    const shapeDiv = document.getElementById('shapeDiv');
    const shapeSelect = document.getElementById('shapeSelect');
    const selectedShape = shapeSelect.value;
    
    if (selectedShape === 'circle') {
        shapeDiv.className = 'shape';
        shapeDiv.classList.add('circle');
    } else if (selectedShape === 'triangle') {
        shapeDiv.className = 'shape';
        shapeDiv.classList.add('triangle');
    } else {
        shapeDiv.className = 'shape';
        shapeDiv.classList.add('square');
    }
}