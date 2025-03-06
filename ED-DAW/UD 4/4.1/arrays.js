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
