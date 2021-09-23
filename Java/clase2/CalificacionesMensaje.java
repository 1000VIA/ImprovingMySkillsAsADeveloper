/**
 * Realiza un programa que diga una frase dependiendo de su calificación.
 *  1. Si ubtuvo menos de 6: "Te faltó esforzarte más".
 *  2. Si ubtuvo de 6 hasta menos de 7: "De panzazo".
 *  3. Si ubtuvo de 7 hasta menos de 8: "Echale más punch".
 *  4. Si ubtuvo de 8 hasta menos de 9: "Bién, puedes mejorar".
 *  5. Si ubtuvo de 9 hasta menos de 10: "Muy bien, te faltó tantito".
 *  6. Si ubtuvo 10: "Excelente, con toda la actitud".
 *  7. Si da otro valor que no está definido dirá: "No es posible la nota".
 */
import java.util.Scanner;

public class CalificacionesMensaje{

    public static void main(String args[]){

        Scanner sc = new Scanner(System.in);

        System.out.println("Por favor ingrese su nota");
        double nota = sc.nextDouble();

        if(nota > 0 && nota < 6){
            System.out.println("Te faltó esforzarte más");
        }

        if(nota >= 6 && nota < 7){
            System.out.println("Raspado");
        }
        if(nota >= 7 && nota < 8){
            System.out.println("Estudia un poco más");
        }
        if(nota >= 8 && nota < 9){
            System.out.println("Bién, puedes mejorar");
        }
        if(nota >= 9 && nota < 10){
            System.out.println("Muy bien, te faltó un poquitito");
        }
        if(nota == 10){
            System.out.println("Excelente, con toda la actitud");
        }
        if(nota < 0 || nota > 10){
            System.out.println("No es posible la nota");
        }
        

    }
}
