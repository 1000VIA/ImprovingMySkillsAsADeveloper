import java.util.Scanner;

public class TablaWhileDinamica{

    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);

        System.out.println("Cuál tabla quieres calcular?");
        int tabla = sc.nextInt();

        int contador = 1;
        int limite = 10;

        System.out.println("*************");

        while(contador <= limite){
            System.out.printf("%d x %d = %d \n", tabla, contador, tabla * contador);
            contador++;

        }
        System.out.println("*************");
        System.out.println("Termino while");
        
        contador = 1;
        do{
            System.out.printf("%d x %d = %d \n", tabla, contador, tabla * contador);
            contador++;
        }while(contador <= limite);

        System.out.println("Termino Do-while");
    }
    
}