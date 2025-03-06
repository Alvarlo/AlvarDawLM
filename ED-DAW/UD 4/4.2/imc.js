function calcularIMC() {
    let altura = prompt("Introduce tu altura en centímetros:");
    let peso = prompt("Introduce tu peso en kilogramos:");

    altura = parseFloat(altura);
    peso = parseFloat(peso);

    // Validar altura y peso
    while (isNaN(altura) || altura <= 0 || isNaN(peso) || peso <= 0) {
        alert("Por favor, introduce valores válidos para la altura y el peso.");
        altura = prompt("Introduce tu altura en centímetros:");
        peso = prompt("Introduce tu peso en kilogramos:");
        altura = parseFloat(altura);
        peso = parseFloat(peso);
    }

    // Calcular IMC
    const alturaMetros = altura / 100;
    const imc = peso / (alturaMetros * alturaMetros);
    
    // Mostrar resultado del IMC
    const resultadoIMC = `Tu Índice de Masa Corporal (IMC) es: ${imc.toFixed(2)}<br><br>
    <strong>Escala del IMC:</strong><br>
    < 16.00: Infrapeso (delgadez severa)<br>
    16.00 – 16.99: Infrapeso (delgadez moderada)<br>
    17.00 - 18.49: Infrapeso (delgadez aceptable)<br>
    18.50 - 24.99: Peso normal<br>
    25.00 - 29.99: Sobrepeso<br>
    30.00 - 34.99: Obeso (Tipo I)<br>
    35.00 - 40.00: Obeso (Tipo II)<br>
    > 40.00: Obeso (Tipo III)`;

    document.getElementById("resultado").innerHTML = resultadoIMC;
}
