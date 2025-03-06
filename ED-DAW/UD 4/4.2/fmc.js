function calcularFCM() {
    let edad = prompt("Introduce tu edad:");
    let sexo = prompt("Introduce tu sexo (M para masculino, F para femenino):");

    edad = parseInt(edad);
    sexo = sexo.toUpperCase();

    // Validar edad y sexo
    while (isNaN(edad) || edad <= 0 || (sexo !== "M" && sexo !== "F")) {
        alert("Por favor, introduce valores válidos para la edad y el sexo.");
        edad = prompt("Introduce tu edad:");
        sexo = prompt("Introduce tu sexo (M para masculino, F para femenino):");
        edad = parseInt(edad);
        sexo = sexo.toUpperCase();
    }

    // Calcular FCM
    let fcm;
    if (sexo === "M") {
        fcm = 220 - edad;
    } else {
        fcm = 226 - edad;
    }

    // Calcular zonas de entrenamiento
    const zonaRecuperacion = [fcm * 0.6, fcm * 0.7];
    const zonaAerobica = [fcm * 0.7, fcm * 0.8];
    const zonaAnaerobica = [fcm * 0.8, fcm * 0.9];
    const lineaRoja = [fcm * 0.9, fcm * 1.0];

    // Mostrar resultado de FCM y zonas de entrenamiento
    const resultadoFCM = `Tu Frecuencia Cardiaca Máxima (FCM) es: ${fcm} latidos por minuto<br><br>
    <strong>Zonas de entrenamiento:</strong><br>
    Zona de recuperación (60%-70%): ${zonaRecuperacion[0].toFixed(0)} - ${zonaRecuperacion[1].toFixed(0)} latidos por minuto<br>
    Zona aeróbica (70%-80%): ${zonaAerobica[0].toFixed(0)} - ${zonaAerobica[1].toFixed(0)} latidos por minuto<br>
    Zona anaeróbica (80%-90%): ${zonaAnaerobica[0].toFixed(0)} - ${zonaAnaerobica[1].toFixed(0)} latidos por minuto<br>
    Línea roja (90%-100%): ${lineaRoja[0].toFixed(0)} - ${lineaRoja[1].toFixed(0)} latidos por minuto`;

    document.getElementById("resultado").innerHTML = resultadoFCM;
}
