import java.util.Scanner;

public class TablaDinamica{

    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);

        System.out.println("Cuál tabla quieres calcular?");
        int tabla = sc.nextInt();

        System.out.println("La tabla elegida fue: " + tabla);

        for(int i = 1; i <= 10; i++){
            int multiplicacion = tabla * i;
            System.out.printf("%d x %d = %d \n", tabla, i, multiplicacion);
        }
    
    }
}