package Ra2AlvaroAranda;

import java.util.Scanner;

public class Ejercicio6AA {
    public static void main(String[] args) {
        /*
        Crea un programa que pregunte el número de capítulos de la nueva temporada de
        “Haikyū!!” y devuelva si has acertado o no
         */
        Scanner scn = new Scanner(System.in);

        int guess = scn.nextInt();

        String respuesta = (guess == 25)? "Has acertado!":"Has fallado... intentalo de nuevo";
        System.out.println(respuesta);
    }
}
