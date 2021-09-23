import java.util.Scanner;
public class Estadistica{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        
        System.out.println("Cuántos datos tienes? ");

        int total = sc.nextInt();
        double suma = 0;

        //Creamos arreglo vacio
        double valores[] = new double[total]; //Guardar datos

        for(int i = 0; i < total; i++){
            System.out.println("Dar el valor " + (i+1));
            double aux = sc.nextDouble();

            //Agregamos valores
            valores[i] = aux;
            suma += aux;
        }
        double media = suma / total; //Resultado de la media 

        double sumaDesviacion = 0;

        for(int j = 0; j < valores.length; j++){
            //Leemos los valores
            sumaDesviacion += Math.pow(valores[j] - media, 2);//Math.pow(base, exp);
        }

        //Resultado de la desviación
        double desviacion = Math.sqrt(sumaDesviacion / total);

        System.out.println("La media es: " + media);
        System.out.println("La desviación estandar es: " + desviacion);
    }
}