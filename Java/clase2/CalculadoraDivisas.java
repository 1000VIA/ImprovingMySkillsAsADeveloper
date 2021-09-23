/*
* Realizar unmenú para hacer la conversión de dólares a pesos y de peso a dólares.
EL usuario elige la opción a realizar
*/
import java.util.Scanner;
public class CalculadoraDivisas{

    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);

        System.out.println("------------------");
        System.out.println("Calculadora Divisas");
        System.out.println("------------------");
        System.out.println("1) Dólares a pesos COP");
        System.out.println("2) Pesos COP a dólares");
        int opcion = sc.nextInt();
        double cantidad;

        double dolares = 1;
        double pesos = 3.817;

        switch (opcion) {
            case 1:
            System.out.println("Dólares a pesos COP");
            System.out.println("Cuántos dólares tienes?");
            cantidad = sc.nextDouble();
            cantidad = (cantidad * pesos) / dolares;
            System.out.printf("Tienes %.2f pesos", cantidad);
            break;
            case 2:
            System.out.println("Pesos COP a dólares");
            System.out.println("Cuántos pesos tienes?");
            cantidad = sc.nextDouble();
            cantidad = (cantidad * dolares) / pesos;
            System.out.printf("Tienes %.2f dólares", cantidad);
            break;   
            default:
            System.out.println("La opción no es válida");
        }

    }
}