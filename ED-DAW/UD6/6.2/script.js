window.onload = function () {
    // 1. La label de ‘Escoge sexo’ y comprobar mediante expresión regular
    const labels = document.getElementsByTagName('label');
    for (let label of labels) {
        if (/Escoge sexo/i.test(label.textContent)) { // Expresión regular para buscar 'Escoge sexo'
            console.log(`Label encontrada: ${label.textContent}`);
        }
    }

    // 2. El innerHTML de la etiqueta de ‘Escoge sexo’
    const labelEscogeSexo = Array.from(labels).find(label => /Escoge sexo/i.test(label.textContent));
    if (labelEscogeSexo) {
        console.log(`innerHTML de 'Escoge sexo': ${labelEscogeSexo.innerHTML}`);
    }

    // 3. El textContent de la etiqueta de ‘Escoge sexo’
    if (labelEscogeSexo) {
        console.log(`textContent de 'Escoge sexo': ${labelEscogeSexo.textContent}`);
    }

    // 4. El valor del primer input de sexo
    const inputSexo = document.querySelector("input[name='sexo']");
    if (inputSexo) {
        console.log(`Valor del primer input de sexo: ${inputSexo.value}`);
    }

    // 5. El valor de sexo que esté seleccionado
    const sexoSeleccionado = document.querySelector("input[name='sexo']:checked");
    if (sexoSeleccionado) {
        console.log(`Valor de sexo seleccionado: ${sexoSeleccionado.value}`);
    } else {
        console.log("No hay sexo seleccionado");
    }

    // 6. Mostrar los atributos del primer input
    if (inputSexo) {
        console.log("Atributos del primer input:");
        for (let attr of inputSexo.attributes) {
            console.log(`${attr.name}: ${attr.value}`);
        }
    }

    // 7. Seleccionar el primer h1, y mostrar información del atributo class e id
    const h1 = document.querySelector("h1");
    if (h1) {
        console.log(`El primer h1 tiene atributo class: ${h1.hasAttribute('class')}`);
        console.log(`El primer h1 tiene atributo id: ${h1.hasAttribute('id')}`);
        if (h1.hasAttribute('class')) {
            console.log(`Contenido del atributo class: ${h1.getAttribute('class')}`);
        }
    }

    // 8. Seleccionar el primer div, y añadir el atributo class=important
    const primerDiv = document.querySelector("div");
    if (primerDiv) {
        primerDiv.setAttribute("class", "important");
        console.log(`Atributo class añadido al primer div: ${primerDiv.getAttribute("class")}`);
    }

    // 9. Borrar el atributo class de la primera etiqueta li
    const primerLi = document.querySelector("li");
    if (primerLi && primerLi.hasAttribute("class")) {
        primerLi.removeAttribute("class");
        console.log("Atributo class eliminado del primer li");
    }

    // 10. Añadir a todos los párrafos un fondo de color amarillo
    const parrafos = document.getElementsByTagName("p");
    for (let parrafo of parrafos) {
        parrafo.style.backgroundColor = "yellow";
    }
    console.log("Fondo amarillo añadido a todos los párrafos");

    // 11. Añadir antes de todos los párrafos un encabezado 3, con el texto “Esto es un párrafo”
    for (let parrafo of parrafos) {
        const encabezado = document.createElement("h3");
        encabezado.textContent = "Esto es un párrafo";
        parrafo.parentElement.insertBefore(encabezado, parrafo);
    }
    console.log("Encabezado h3 añadido antes de todos los párrafos");
};
