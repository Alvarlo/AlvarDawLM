package Ra2AlvaroAranda;

import java.util.Scanner;

public class Ejercicio6_2AA {
    public static void main(String[] args) {
        /*
        Crea un programa que pregunte el número de capítulos de la nueva temporada de
        “Haikyū!!” y devuelva si has acertado o no
         */
        Scanner scn = new Scanner(System.in);

        System.out.println("¿Cuántos capítulos tiene la nueva temporada de Haikyu?");

        final int CAPITULOS = 25;

        int guess = scn.nextInt();

        if (guess == CAPITULOS){
            System.out.println("Has acertado!");
        }else{
            System.out.println("Has fallado... intentalo de nuevo");
        }
    }
}
