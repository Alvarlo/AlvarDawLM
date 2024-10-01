package Ra2AlvaroAranda;

import java.util.Scanner;

public class Ejercicio11AA {
    public static void main(String[] args) {

        /*
        Ejercicio1: Pide dos números y muestra la suma, resta, multiplicación y división de ambos.

         */

        Scanner scn = new Scanner(System.in);

        System.out.println("Inserta dos numeros");

        int num1 = scn.nextInt();
        int num2 = scn.nextInt();


        System.out.println("La suma es " + (num1 + num2));
        System.out.println("La resta es " + (num1 - num2));
        System.out.println("La multiplicacion es " + (num1 * num2));
        System.out.println("La division es " + (num1 / num2));


        /*
        Añade al ejercicio 1 la pregunta de qué tipo de operación quiere que se realice, de tal
        forma que el usuario inserte dos números y la operación que quiere que se ejecute, y
        el programa devuelva la salida correcta

         */




    }
}
