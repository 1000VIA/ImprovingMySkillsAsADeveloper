import java.util.Scanner;

public class AprobadoReprobado{

    public static void main(String args[]){
    //Hacer un programa que nos indique si un alumno aprobó o reprobó la materia.

        Scanner leer = new Scanner(System.in);

        System.out.println("Cuál es tú calificación? ");
        double calificacion = leer.nextDouble();

        if(calificacion >= 3){
            System.out.println("Tu nota es: " + calificacion + " Haz aprobado");
        }else if(calificacion < 3){
            System.out.println("Tu nota es: " + calificacion + " lo siento, debes repetir la materia");
        }
    }
}