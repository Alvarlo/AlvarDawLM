

function calculoNumeros(){
    let numero = parseInt(document.getElementById('numero').value);
    document.getElementById('op1').innerHTML = "Su valor exponencial: " +numero.toExponential();
    document.getElementById('op2').innerHTML = " El número con 4 decimales: " +numero.toFixed(4);
    document.getElementById('op3').innerHTML = "El número en binario: " +numero.toString(2);
    document.getElementById('op4').innerHTML = "El número en octal: " +numero.toString(9);
    document.getElementById('op5').innerHTML = "El número en hexadecimal: " +numero.toString(16);

}