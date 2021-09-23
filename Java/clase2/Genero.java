/*
*Genera un programa que pregunte qué género eres, si eres hombre que diha "Macho alfa lomo completado",
de lo contrario que diga "Eres una linda señorita"
 */

import java.util.Scanner;

public class Genero{

    public static void main(String args[]){

        Scanner sc = new Scanner(System.in);

        System.out.println("Que genero eres?\n 1)Hombre\n 2)Mujer");

        int genero = sc.nextInt();

        if(genero == 1){
            System.out.println("Macho alfa lomo completado");
        }else if(genero == 2){
            System.out.println("Eres una linda señorita");
        }else{
            System.out.println("Otro");
        }

    }
}