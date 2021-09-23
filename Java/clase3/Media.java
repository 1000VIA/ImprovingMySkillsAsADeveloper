/*
 * Solicitar al usuario la cantidad de números que va a ingresar de un
 * conjunto pidiendo uno a uno, al final dar el resultado de la media.
 */
import java.util.Scanner;

public class Media{

    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);

        System.out.println("Cálculo de la média");

        System.out.println("Cuántos valores tiene? ");

        int total = sc.nextInt();

        double suma = 0;
        
        for(int i = 0; i< total; i++){
            System.out.println("Igresar el valor " + (i+1) + ": ");
            int aux = sc.nextInt();
            suma = aux + suma;
            System.out.println();
        }
        double media = suma / total;
        System.out.println("El valor de la media es: " + media);
    
    }
}