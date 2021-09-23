import java.util.Scanner;

public class ParImpar{

    public static void main(String args[]){
        /*Realizar un programa que diga si el número es par o impar y si el 
        número es mayor a 10, que diga un mensaje que el dígito dado es superios a 10*/
        Scanner leer = new Scanner(System.in);

        System.out.println("Por favor ingrese un número para conocer si es par o impar");
        int numero = leer.nextInt();

        if(numero % 2 == 0){
            System.out.println("El numero es par");  
        }
        if(numero % 2 != 0){
            System.out.println("El numero es impar"); 
        }

        if(numero > 10 ){
            System.out.println("El dígito dado es superios a 10"); 
        }
 
    }
       
}


