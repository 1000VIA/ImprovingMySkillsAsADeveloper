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

public class CalculadoraSwitch{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);

        System.out.println("------------------");
        System.out.println("Calculadora básica");
        System.out.println("------------------");
        System.out.println("Opciones:\n 1) Suma\n 2) Resta\n 3) Multiplicación\n 4) División\n");
        int opcion = sc.nextInt();
        double resultado, valor1, valor2;

        switch (opcion) {
            case 1://Suma
            System.out.println("Ingresar valor número 1");
             valor1 = sc.nextDouble(); 
            System.out.println("Ingresar valor número 2");
             valor2 = sc.nextDouble(); 
            resultado = valor1 + valor2;
            System.out.println("El resultado de la suma es: " + resultado);
                break;
            case 2://Resta
            System.out.println("Ingresar valor número 1");
             valor1 = sc.nextDouble(); 
            System.out.println("Ingresar valor número 2");
             valor2 = sc.nextDouble(); 
            resultado = valor1 - valor2;
            System.out.println("El resultado de la resta es: " + resultado);
                break;

            case 3://Multiplicación
            System.out.println("Ingresar valor número 1");
             valor1 = sc.nextDouble(); 
            System.out.println("Ingresar valor número 2");
             valor2 = sc.nextDouble(); 
            resultado = valor1 * valor2;
            System.out.println("El resultado de la multiplicación es: " + resultado);
                break;

            case 4://División
            System.out.println("Ingresar valor número 1");
             valor1 = sc.nextDouble(); 
            System.out.println("Ingresar valor número 2");
             valor2 = sc.nextDouble(); 
            resultado = valor1 / valor2;
            System.out.println("El resultado de la división es: " + resultado);
                break;

            default:
            System.out.println("La opción no existe");
                break;
        }
    }

}

