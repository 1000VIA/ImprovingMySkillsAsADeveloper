/*Realizar un programa que solicite la edad al usuario y le de un mensaje en función de ello,
los rangos de edad son:
    1. Si tiene de 1 a 10 años: "Eres niño".
    2. Si tiene de 11 a 17 años: "Eres adolescente".
    3. Si tiene de 18 a 30 años: "Eres adulto".
    4. Si tiene de 31 a 80 años: "Eres mayor".
Fuera de estos valores debe mandar el siguiente mensaje: "No es posible la edad"
*/
import java.util.Scanner;

public class EdadUser{

    public static void main(String args[]){

        Scanner leer = new Scanner(System.in);

        System.out.println("Cuál es tú edad? ");
        int edad = leer.nextInt();

        if(edad >= 1 && edad <= 10 ){
            System.out.println("Eres niño ");
        }
        if(edad >= 11 && edad <= 17){
            System.out.println("Eres adolescente");
        }
        if(edad >= 18 && edad <= 30){
            System.out.println("Eres adulto");
        }
        if(edad >= 31 && edad <= 80){
            System.out.println("Eres mayor");
        }
        if(edad <= 0 || edad > 80){
            System.out.println("Esta edad no es posible");
        }

    }
}