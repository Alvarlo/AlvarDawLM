package Ra2AlvaroAranda;

import java.util.Scanner;

public class Ejercicio9AA {
    public static void main(String[] args) {

        /*
        Crea un juego que genere un número al azar del 0 al 5 y pida un número al usuario
        para que acierte el número
         */

        Scanner scn = new Scanner(System.in);


        int aleatorio = (int) (Math.random()*6);

        int num1 = scn.nextInt();

        String conclusion = (num1==aleatorio)?"Has acertado":"Intentalo de nuevo";

        System.out.println(conclusion);

    }
}
