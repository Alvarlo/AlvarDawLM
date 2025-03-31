// Script para interactuar con el DOM y mostrar datos en la consola
window.onload = function() {
    // 1. El número de párrafos de la página
    const parrafos = document.getElementsByTagName("p");
    console.log(`Número de párrafos en la página: ${parrafos.length}`);

    // 2. El segundo párrafo
    if (parrafos.length >= 2) {
        console.log(`Segundo párrafo: ${parrafos[1].textContent}`);
    }

    // 3. Todos los párrafos
    console.log("Todos los párrafos:");
    for (let p of parrafos) {
        console.log(p.textContent);
    }

    // 4. El primer párrafo que hay dentro del div ‘lipsum’
    const divLipsum = document.getElementById("lipsum");
    const primerParrafoLipsum = divLipsum.querySelector("p");
    console.log(`Primer párrafo dentro del div 'lipsum': ${primerParrafoLipsum.textContent}`);

    // 5. Los párrafos que hay dentro del div con id ‘lipsum’
    const parrafosEnLipsum = divLipsum.getElementsByTagName("p");
    console.log("Párrafos dentro del div 'lipsum':");
    for (let p of parrafosEnLipsum) {
        console.log(p.textContent);
    }

    // 6. El número de ítems que hay en la lista
    const lista = document.querySelector("ul");
    const items = lista.getElementsByTagName("li");
    console.log(`Número de ítems en la lista: ${items.length}`);

    // 7. El último ítem de la lista
    const ultimoItem = items[items.length - 1];
    console.log(`Último ítem de la lista: ${ultimoItem.textContent}`);

    // 8. Los elementos de la clase important
    const elementosImportant = document.getElementsByClassName("important");
    console.log("Elementos con la clase 'important':");
    for (let elemento of elementosImportant) {
        console.log(elemento.textContent);
    }

    // 9. Los ítems de la lista de la clase ‘important’ (solo los li)
    const itemsImportant = lista.querySelectorAll("li.important");
    console.log("Ítems de la lista con la clase 'important':");
    for (let item of itemsImportant) {
        console.log(item.textContent);
    }

    // 10. El elemento con id “input2”
    const input2 = document.getElementById("input2");
    console.log(`Elemento con id 'input2': ${input2}`);

    // 11. Los input con nombre (name) ‘sexo’
    const inputsSexo = document.querySelectorAll("input[name='sexo']");
    console.log("Inputs con nombre 'sexo':");
    inputsSexo.forEach(input => console.log(input.value));

    // 12. El padre del identificador input2
    const padreInput2 = input2.parentElement;
    console.log(`Padre del identificador 'input2': ${padreInput2.tagName}`);

    // 13. El hijo 0 del elemento raíz
    const hijoRaiz = document.documentElement.children[0];
    console.log(`Hijo 0 del elemento raíz: ${hijoRaiz.tagName}`);

    // 14. El primer hijo de la primera lista “ul”
    const primerHijoUl = lista.firstElementChild;
    console.log(`Primer hijo de la lista 'ul': ${primerHijoUl.textContent}`);

    // 15. El último hijo de la primera lista “ul”
    const ultimoHijoUl = lista.lastElementChild;
    console.log(`Último hijo de la lista 'ul': ${ultimoHijoUl.textContent}`);

    // 16. El siguiente hermano de la primera lista “ul”
    const siguienteHermanoUl = lista.nextElementSibling;
    console.log(`Siguiente hermano de la lista 'ul': ${siguienteHermanoUl ? siguienteHermanoUl.tagName : "No hay siguiente hermano"}`);

    // 17. El hermano previo de la primera lista “ul”
    const hermanoPrevioUl = lista.previousElementSibling;
    console.log(`Hermano previo de la lista 'ul': ${hermanoPrevioUl ? hermanoPrevioUl.tagName : "No hay hermano previo"}`);

    // 18. Mostrar si la primera lista “ul”, tiene hijos
    console.log(`La lista 'ul' tiene hijos: ${lista.hasChildNodes()}`);

    // 19. Mostrar cuántos hijos tiene la primera lista “ul”
    console.log(`La lista 'ul' tiene ${lista.childElementCount} hijos`);
};
