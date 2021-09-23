/*Crea una menú dando las opciones para seleccionar que 
se debe calcular.
    Opciones: 
        1. Suma
        2. Resta
        3. Multiplicación
        4. División
y al final arrojar el resultado de la operación,en caso que no 
exista la operación, lanzará el mensaje que no existe dicha operación.
 */

import java.util.Scanner;

public class Calculadora{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);

        System.out.println("------------------");
        System.out.println("Calculadora básica");
        System.out.println("------------------");
        System.out.println("Opciones:\n 1) Suma\n 2) Resta\n 3) Multiplicación\n 4) División\n");
        int opcion = sc.nextInt();

        if(opcion > 4 || opcion <= 0){
            System.out.println("La opción no es válida");
        }else{
            System.out.println("Ingresar valor número 1");
            double valor1 = sc.nextDouble(); 
            System.out.println("Ingresar valor número 2");
            double valor2 = sc.nextDouble(); 
            double resultado;

            if(opcion == 1){
                resultado = valor1 + valor2;
                System.out.println("La suma es: " + resultado);
            }else if(opcion == 2){
                resultado = valor1 - valor2;
                System.out.println("La resta es: " + resultado);
            }else if(opcion == 3){
                resultado = valor1 * valor2;
                System.out.println("La multiplicación es: " + resultado);
            }else if(opcion == 4){
                resultado = valor1 / valor2;
                System.out.println("La división es: " + resultado);
            }
        }
    }
}