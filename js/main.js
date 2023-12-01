// 2. Escribir por consola
document.addEventListener('DOMContentLoaded', function() {
    console.log("Contenido del DOM cargado");

// 3. Cargar el value del textarea
var textarea = document.getElementById('origen');
textarea.value = "<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>";

// 4. Obtener todos los elementos <input> por id y class
var inputsById = document.querySelectorAll('#btn-reemplazar');
var inputsByClass = document.querySelectorAll('.btn-agregar, .btn-vaciar, .btn-convertir-a-mayusculas');

// Obtener el botón sin "clase"
var convertirAMinusculas = document.querySelector('button');
convertirAMinusculas.disabled = false;

// Crear una nueva colección que incluya todos los elementos necesarios
var elementsToEnable = Array.from(inputsById).concat(Array.from(inputsByClass), [convertirAMinusculas]);

// Iterar sobre cada elemento a habilitar y cambiar su propiedad disabled a false
for (var i = 0; i < elementsToEnable.length; i++) {
    elementsToEnable[i].disabled = false;
}
console.log(elementsToEnable); 


// 5. Programa de los botones superiores
var reemplazar = document.getElementById('btn-reemplazar');
var agregar = inputsByClass[0];
var agregar5Veces = inputsByClass[1];
var agregar10Veces = inputsByClass[2];
var agregarNVeces = inputsByClass[3];

// Reemplazar
reemplazar.addEventListener('click', function() {

var contenidoTextarea = textarea.value;
var divDestino = document.getElementById('destino');

divDestino.innerHTML = contenidoTextarea;
});

// Agregar eventos click a los demas botones
agregar.addEventListener('click', function() {
    agregarContenido(1);
});

agregar5Veces.addEventListener('click', function() {
    agregarContenido(5);
});

agregar10Veces.addEventListener('click', function() {
    agregarContenido(10);
});

agregarNVeces.addEventListener('click', function() {
    var cantidad = prompt("Ingrese la cantidad de veces a agregar:");
    cantidad = parseInt(cantidad);

    if (!isNaN(cantidad) && cantidad > 0) {
        agregarContenido(cantidad);
    } else {
        alert("Por favor, ingrese un número válido mayor que 0.");
    }
});

// Función para agregar contenido al div destino
function agregarContenido(veces) {
    var contenidoTextarea = textarea.value;
    var divDestino = document.getElementById('destino');

    for (var i = 0; i < veces; i++) {
        divDestino.innerHTML += contenidoTextarea;
    }
}

// 6. Programa de los botones inferiores
var vaciarBoton = document.querySelector('.btn-vaciar');
var convertirAMayusculas = document.querySelector('.btn-convertir-a-mayusculas');
var divDestino = document.getElementById('destino');

vaciarBoton.addEventListener('click', function() {
    divDestino.innerHTML = '';
});

convertirAMayusculas.addEventListener('click', function() {
    divDestino.innerHTML = divDestino.innerHTML.toUpperCase();
});

convertirAMinusculas.addEventListener('click', function() {
    divDestino.innerHTML = divDestino.innerHTML.toLowerCase();
});

// 7. Obtener HTMLCollection de las <li> de la página
var listaItems = document.getElementsByTagName('li');

for (var i = 0; i < listaItems.length; i++) {
    console.log("[Ok] " + listaItems[i].innerText);
}
});

