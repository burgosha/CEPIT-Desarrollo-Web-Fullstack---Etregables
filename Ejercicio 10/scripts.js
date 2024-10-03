function agregarBotonEliminar() {
    let miListaNodo = document.getElementsByTagName("LI");
    for (let i = 0; i < miListaNodo.length; i++) {
        let span = document.createElement("SPAN");
        let text = document.createTextNode("\u00D7");
        span.className = "eliminar";
        span.appendChild(text);
        miListaNodo[i].appendChild(span);
        span.onclick = function() {
            this.parentElement.remove();
        }
    }
}

function toggleRealizada(element) {
    element.classList.toggle("realizada");
}

agregarBotonEliminar();

function nuevoElemento() {
    let li = document.createElement("LI");
    let inputValue = document.getElementById("todoInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("¡Tenés escribir algo!");
    } else {
        document.getElementById("todoUl").appendChild(li);
        li.onclick = function() {
            toggleRealizada(this);
        }
    }
    document.getElementById("todoInput").value = "";

    let span = document.createElement("SPAN");
    let text = document.createTextNode("\u00D7");
    span.className = "eliminar";
    span.appendChild(text);
    li.appendChild(span);

    span.onclick = function() {
        this.parentElement.remove();
    }
}

let eliminarBotones = document.getElementsByClassName("eliminar");
for (let i = 0; i < eliminarBotones.length; i++) {
    eliminarBotones[i].onclick = function() {
        this.parentElement.remove();
    }
}

let elementosLista = document.getElementsByTagName("LI");
for (let i = 0; i < elementosLista.length; i++) {
    elementosLista[i].onclick = function() {
        toggleRealizada(this);
    }
}