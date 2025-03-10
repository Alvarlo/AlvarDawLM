/*
Vamos a gestionar una lista de países haciendo uso de Arrays.
Para ello necesitarás crear un archivo arrays.js que incluya las siguientes funciones:
1. Mostrar el número de elementos del array.
2. Mostrar todos los elementos del array.
3. Muestra los elementos del array en sentido inverso.
4. Muestra los elementos del array ordenados alfabéticamente (pero no los ordena).
5. Añadir un elemento al principio del array.
6. Añadir un elemento al final del array.
7. Borrar un elemento al principio del array (y decir cuál se ha borrado).
8. Borrar un elemento al final del array (y decir cuál se ha borrado).
9. Muestra el elemento que se encuentra en una posición que el usuario indica.
10.Muestra la posición en la que se encuentra un elemento que le indica el usuario.
11.Muestra los elementos que se encuentran en un intervalo que el usuario indica.
Observaciones:
Ten en cuenta que el array será una variable global y que se pasará por parámetro en
todas las funciones.
Cada opción se mostrará por medio de un botón, de la forma:
<button onclick="nombreFunción()">Texto del botón</button>
El resultado de las opciones se muestran en un alert.
*/
const paises = ["España", "México", "Argentina", "Brasil", "Chile", "Colombia", "Perú", "Venezuela", "Uruguay", "Ecuador"];

function mostrarNumeroElementos(arr) {
    alert("Número de elementos en el array: " + arr.length);
}

function mostrarTodosElementos(arr) {
    alert("Elementos del array: " + arr.join(", "));
}

function mostrarElementosInverso(arr) {
    alert("Elementos del array en sentido inverso: " + arr.slice().reverse().join(", "));
}

function mostrarElementosOrdenAlfabetico(arr) {
    alert("Elementos del array ordenados alfabéticamente: " + arr.slice().sort().join(", "));
}

function anadirElementoPrincipio(arr, elemento) {
    arr.unshift(elemento);
    alert("Elemento añadido al principio: " + elemento + "\nNuevo array: " + arr.join(", "));
}

function anadirElementoFinal(arr, elemento) {
    arr.push(elemento);
    alert("Elemento añadido al final: " + elemento + "\nNuevo array: " + arr.join(", "));
}

function borrarElementoPrincipio(arr) {
    const elementoBorrado = arr.shift();
    alert("Elemento borrado al principio: " + elementoBorrado + "\nNuevo array: " + arr.join(", "));
}

function borrarElementoFinal(arr) {
    const elementoBorrado = arr.pop();
    alert("Elemento borrado al final: " + elementoBorrado + "\nNuevo array: " + arr.join(", "));
}

function mostrarElementoEnPosicion(arr) {
    const posicion = parseInt(prompt("Introduce la posición del elemento (comenzando desde 0):"));
    if (posicion >= 0 && posicion < arr.length) {
        alert("Elemento en la posición " + posicion + ": " + arr[posicion]);
    } else {
        alert("Posición no válida.");
    }
}

function mostrarPosicionDeElemento(arr) {
    const elemento = prompt("Introduce el nombre del elemento:");
    const posicion = arr.indexOf(elemento);
    if (posicion !== -1) {
        alert("Posición del elemento '" + elemento + "': " + posicion);
    } else {
        alert("Elemento no encontrado.");
    }
}

function mostrarElementosEnIntervalo(arr) {
    const inicio = parseInt(prompt("Introduce la posición de inicio del intervalo (comenzando desde 0):"));
    const fin = parseInt(prompt("Introduce la posición de fin del intervalo (comenzando desde 0):"));
    if (inicio >= 0 && fin < arr.length && inicio <= fin) {
        alert("Elementos en el intervalo " + inicio + " a " + fin + ": " + arr.slice(inicio, fin + 1).join(", "));
    } else {
        alert("Intervalo no válido.");
    }
}
