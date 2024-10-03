//Estilos generales

//html
document.documentElement.style.boxSizing = 'border-box';
document.documentElement.style.position = 'relative';
document.documentElement.style.height = '100vh';

//body
document.body.style.width = '100%';
document.body.style.margin = '0';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';
document.body.style.fontFamily = '"Inter", sans-serif';
document.body.style.color = 'hsl(240, 5.9%, 10%)';

//header
const header = document.createElement('header');
header.style.width = '100%';
header.style.minHeight = '150px';
header.style.display = 'flex';
header.style.justifyContent = 'center';
header.style.alignItems = 'center';
header.style.color = 'whitesmoke';
header.style.backgroundColor = 'hsl(240, 5.9%, 10%)';

const headerNombre = document.createElement('div');
headerNombre.className = 'header-nombre';
headerNombre.style.display = 'flex';
headerNombre.style.flexDirection = 'column';
headerNombre.style.justifyContent = 'center';
headerNombre.style.alignItems = 'center';
headerNombre.style.gap = '6px';

const h1 = document.createElement('h1');
h1.textContent = 'Página creada con JS'; // Título del ejercicio
h1.style.fontSize = '30px';
h1.style.margin = '0';
headerNombre.appendChild(h1);

const pHeader = document.createElement('p');
pHeader.textContent = 'Ejercicio 11'; // Número de ejercicio
pHeader.style.color = 'hsl(0, 0%, 67%)';
pHeader.style.margin = '0';
pHeader.style.fontWeight = '500';
headerNombre.appendChild(pHeader);

header.appendChild(headerNombre);
document.body.appendChild(header);

//main
const main = document.createElement('main');
main.style.width = '100%';
main.style.maxWidth = '800px';
main.style.marginTop = '60px';

const section = document.createElement('section');
section.style.marginBottom = '60px';

const h2 = document.createElement('h2');
h2.textContent = 'Consigna del trabajo';
h2.style.fontSize = '25px';
section.appendChild(h2);

const pDescripcion = document.createElement('p');
pDescripcion.className = 'descripcion';
pDescripcion.textContent = 'Crear un header, un content con dos divs en posisición de fila y un footer desde JavaScript. Aplicarles propiedades de flexbox con JavaScript, colores, fondo, etc (libr).';
pDescripcion.style.marginTop = '15px';
pDescripcion.style.lineHeight = '25px';
section.appendChild(pDescripcion);

const h3 = document.createElement('h3');
h3.textContent = 'Divs en fila';
h3.style.fontSize = '18px';
h3.style.margin = '0';
section.appendChild(h3);

//divs centrados
const divCentrado = document.createElement('div');
divCentrado.className = 'centrado';
divCentrado.style.display = 'flex';
divCentrado.style.flexDirection = 'row';
divCentrado.style.gap = '10px';
divCentrado.style.justifyContent = 'center';
divCentrado.style.alignItems = 'center';

const divAzul = document.createElement('div');
divAzul.className = 'azul';
divAzul.style.width = '100px';
divAzul.style.height = '100px';
divAzul.style.backgroundColor = 'blue';
divCentrado.appendChild(divAzul);

const divRojo = document.createElement('div');
divRojo.className = 'rojo';
divRojo.style.width = '100px';
divRojo.style.height = '100px';
divRojo.style.backgroundColor = 'red';
divCentrado.appendChild(divRojo);

section.appendChild(divCentrado);
main.appendChild(section);
document.body.appendChild(main);

//footer
const footer = document.createElement('footer');
footer.style.width = '94.7%';
footer.style.position = 'absolute';
footer.style.bottom = '0';
footer.style.height = 'fit-content';
footer.style.backgroundColor = 'hsl(240, 4.8%, 95.9%)';
footer.style.display = 'flex';
footer.style.justifyContent = 'center';
footer.style.alignItems = 'center';
footer.style.padding = '30px';
footer.textContent = '© 2024 Burgos Hernán Andrés. Todos los derechos reservados.';

document.body.appendChild(footer);