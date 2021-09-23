import java.util.Scanner;

public class Conversiones2{

    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);// creando una instancia

        double valor;
        double centimetro = 2.54;
        double pulgada = 1;

        System.out.println("Calculadora de pulgada a centimetros");
        System.out.println("------------------------------------");
        System.out.println("Dar pulgadas");
        valor = scanner.nextDouble();

        double resultado = (valor * centimetro) / pulgada;

        System.out.printf("%.2f pulgadas es igual a %.2f centrimetros \n", valor, resultado);
    }
}