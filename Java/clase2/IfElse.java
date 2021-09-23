import java.util.Scanner;

public class IfElse{

    public static void main(String args[]){

        Scanner sc = new Scanner(System.in);

        System.out.println("Por favor ingrese un valor");

        int valor = sc.nextInt();

        if(valor == 1){
            System.out.println("El valor es igual a 1");
        }else{
            System.out.println("El valor es diferente de 1");
        }

    }

}