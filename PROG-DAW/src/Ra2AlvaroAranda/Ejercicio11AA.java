package Ra2AlvaroAranda;

import java.util.Scanner;

public class Ejercicio11AA {
    public static void main(String[] args) {

        /*
        Ejercicio1: Pide dos números y muestra la suma, resta, multiplicación y división de ambos.

         */

        Scanner scn = new Scanner(System.in);
        Scanner scl = new Scanner(System.in);
        String respuesta1 = "sumar";
        String respuesta2 = "restar";
        String respuesta3 = "multiplicar";
        String respuesta4 = "dividir";


        System.out.println("Inserta dos numeros");

        int num1 = scn.nextInt();
        int num2 = scn.nextInt();

        System.out.println("¿Qué operación quiere realizar?: sumar / restar / multiplicar / dividir ");

        String respuesta = scl.nextLine();

        if (respuesta.equals(respuesta1)) {
            System.out.println("La suma es " + (num1 + num2));
        }
        else if (respuesta.equals(respuesta2)){
            System.out.println("La resta es " + (num1 - num2));
        }
        else if (respuesta.equals(respuesta3)){
            System.out.println("La multiplicacion es " + (num1 * num2));
        }
        else if (respuesta.equals(respuesta4)) {
            System.out.println("La division es " + (num1 / num2));
        }



        /*
        Añade al ejercicio 1 la pregunta de qué tipo de operación quiere que se realice, de tal
        forma que el usuario inserte dos números y la operación que quiere que se ejecute, y
        el programa devuelva la salida correcta
         */






    }
}
