import java.util.Scanner;

public class Divisas2{

    public static void main(String args[]) {

        Scanner leer = new Scanner(System.in);// creando una instancia de scanner

        System.out.println("---------------------------------------------");
        System.out.println("Calculadora de divisas de Dolares a pesos COP");
        System.out.println("---------------------------------------------");


        double cantidad;
        double peso = 3.815;
        double dolar = 1;


        System.out.println("Cuántos dolares tienes? ");
        cantidad = leer.nextDouble();

        double resultado = (cantidad * peso ) / dolar;

        System.out.printf("tienes %.2f dolares y son %.2f pesos\n", cantidad, resultado);



        
    }
}