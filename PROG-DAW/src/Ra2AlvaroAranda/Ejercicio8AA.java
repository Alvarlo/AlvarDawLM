package src.Ra2AlvaroAranda;

import java.util.Scanner;

public class Ejercicio8AA {
    public static void main(String[] args) {

        /*
        Crea un programa que reciba una fecha con el formato DD/MM/AAAA y muestre la
        frase “Hoy es el día DD del mes MM del año AAAA”, cambiando las letras por DD, MM y
        AAAA por lo datos insertados.
         */

        Scanner scl = new Scanner(System.in);

        System.out.println("Inserte fecha: (DD/MM/AAAA): ");

        byte day = (byte) scl.nextInt();
        byte month = (byte) scl.nextInt();
        short year = (short) scl.nextInt();


        System.out.println("Hoy es el día " + day + " del mes " + month + " del año " + year);
    }
}
