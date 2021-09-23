import java.util.Scanner;

public class CalculadoraInfinita{
    public static void main(String args[]){

        Scanner sc = new Scanner(System.in);
        int opcion = 0;

        do{
            System.out.println("Cálculadora básica");
            System.out.println("1. Suma");
            System.out.println("2. Resta");
            System.out.println("3. Multiplicación");
            System.out.println("4. División");
            System.out.println("5. Salir");

            opcion = sc.nextInt();

            double valor1, valor2, resultado;

            switch (opcion) {
                case 1:
                    System.out.println("Suma");
                    System.out.println("Ingresar valor 1");
                    valor1 = sc.nextInt();
                    System.out.println("Ingresar valor 2");
                    valor2 = sc.nextInt();
                    resultado = valor1 + valor2;
                    System.out.println("El resultado de la suma es: " + resultado);
                    break;
                case 2:
                    System.out.println("Resta");
                    System.out.println("Ingresar valor 1");
                    valor1 = sc.nextInt();
                    System.out.println("Ingresar valor 2");
                    valor2 = sc.nextInt();
                    resultado = valor1 - valor2;
                    System.out.println("El resultado de la resta es: " + resultado);
                    break;
                case 3:
                    System.out.println("Multiplicación");
                    System.out.println("Ingresar valor 1");
                    valor1 = sc.nextInt();
                    System.out.println("Ingresar valor 2");
                    valor2 = sc.nextInt();
                    resultado = valor1 * valor2;
                    System.out.println("El resultado de la multiplicación es: " + resultado);
                    break;
                case 4:
                    System.out.println("División");
                    System.out.println("Ingresar valor 1");
                    valor1 = sc.nextInt();
                    System.out.println("Ingresar valor 2");
                    valor2 = sc.nextInt();
                    resultado = valor1 / valor2;
                    System.out.println("El resultado de la división es: " + resultado);
                    break;
                case 5:
                    System.out.println("Haz salido del programa");
                    
                    break;
                default:
                    System.out.println("La opción no es válida");
            }
        }while(opcion != 5);
    }
}