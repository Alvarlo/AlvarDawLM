/*
Calculadora de FCM –Frecuencia Cardiaca Máxima- (fcm.js)
Esta función solicitará al usuario su edad y su sexo y devuelva la frecuencia
cardiaca máxima por pantalla (en el cuerpo de la página).
Además, indicará los siguientes valores:
Zona de recuperación (60%-70%).
Zona aeróbica (70%-80%).
Zona anaeróbica (80%-90%).
Línea roja (90%-100%).
Además, comprobará que no se meta ningún valor incorrecto de edad y sexo, y
en caso de que así sea, volverá a solicitar los datos.
En la página html, se crearán dos botones que llamen a las funciones creadas
anteriormente, para crear los botones, puede usar las siguiente estructura:
*/
function calcularFCM() {
    let edad = prompt("Introduce tu edad:");
    let sexo = prompt("Introduce tu sexo (M para masculino, F para femenino):");

    edad = parseInt(edad);
    sexo = sexo.toUpperCase();

    while (isNaN(edad) || edad <= 0 || (sexo !== "M" && sexo !== "F")) {
        alert("Por favor, introduce valores válidos para la edad y el sexo.");
        edad = prompt("Introduce tu edad:");
        sexo = prompt("Introduce tu sexo (M para masculino, F para femenino):");
        edad = parseInt(edad);
        sexo = sexo.toUpperCase();
    }

    // Calculo del FCM
    let fcm;
    if (sexo === "M") {
        fcm = 220 - edad;
    } else {
        fcm = 226 - edad;
    }

    const zonaRecuperacion = [fcm * 0.6, fcm * 0.7];
    const zonaAerobica = [fcm * 0.7, fcm * 0.8];
    const zonaAnaerobica = [fcm * 0.8, fcm * 0.9];
    const lineaRoja = [fcm * 0.9, fcm * 1.0];

    const resultadoFCM = `Tu Frecuencia Cardiaca Máxima (FCM) es: ${fcm} latidos por minuto<br><br>
    <strong>Zonas de entrenamiento:</strong><br>
    Zona de recuperación (60%-70%): ${zonaRecuperacion[0].toFixed(0)} - ${zonaRecuperacion[1].toFixed(0)} latidos por minuto<br>
    Zona aeróbica (70%-80%): ${zonaAerobica[0].toFixed(0)} - ${zonaAerobica[1].toFixed(0)} latidos por minuto<br>
    Zona anaeróbica (80%-90%): ${zonaAnaerobica[0].toFixed(0)} - ${zonaAnaerobica[1].toFixed(0)} latidos por minuto<br>
    Línea roja (90%-100%): ${lineaRoja[0].toFixed(0)} - ${lineaRoja[1].toFixed(0)} latidos por minuto`;

    document.getElementById("resultado").innerHTML = resultadoFCM;
}
