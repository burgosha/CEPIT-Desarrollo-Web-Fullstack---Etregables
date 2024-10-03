fetch('datos.json')
.then(response => response.json())
.then(data => {
    const section = document.querySelector('section');
    const contenedorCards = document.createElement('div');
    contenedorCards.classList.add('contenedor-cards');
    data.forEach(persona => {
        const card = document.createElement('div');
        card.classList.add('card');

        const nombre = document.createElement('h3');
        nombre.textContent = persona.nombre;

        const direccion = document.createElement('p');
        direccion.innerHTML = `<span>Dirección: </span>${persona.direccion}`;

        const edad = document.createElement('p');
        edad.innerHTML = `<span>Edad: </span>${persona.edad} años`;

        const dni = document.createElement('p');
        dni.innerHTML = `<span>DNI: </span>${persona.dni}`;

        const boton = document.createElement('button');
        boton.textContent = 'Desactivar';
        boton.addEventListener('click', () => {
            if (card.classList.contains('desactivado') && boton.classList.contains('desactivado')) {
                card.classList.remove('desactivado');
                boton.classList.remove('desactivado');
                boton.textContent = 'Desactivar';
            } else {
                card.classList.add('desactivado');
                boton.classList.add('desactivado');
                boton.textContent = 'Activar';
            }
        });

        card.appendChild(nombre);
        card.appendChild(direccion);
        card.appendChild(edad);
        card.appendChild(dni);
        card.appendChild(boton);
        contenedorCards.appendChild(card);
    });
    section.appendChild(contenedorCards);
})
.catch(error => console.error('Error:', error));