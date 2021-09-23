import java.util.Scanner;
public class Leer{

    public static void main(String args[]) {
        Scanner  scanner = new Scanner(System.in); // creando una instancia

        System.out.println("Cuál es tu edad?");
        int edad = scanner.nextInt();

        System.out.println("Yo también tengo " + edad + " Anios");

        System.out.println("Cuál es tu peso?");
        double peso = scanner.nextDouble();

        System.out.println("Yo peso " + (peso + 10) + " Kilos");

        System.out.println("Cuál es tu nombre?");
        String nombre = scanner.next();

        System.out.println("Yo igual me llamo " +  nombre);
    }
}