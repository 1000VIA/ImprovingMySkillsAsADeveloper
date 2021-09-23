public class Divisas{

    public static void main(String[] args){
        //Realizar programa para conversiones de divisas, pasar de dólares a pesos.

        double cantidad = 10;

        double peso = 18.90;
        double dolar = 1;
        double resultado = (cantidad * peso) / dolar;

        System.out.println(cantidad +" dolares en pesos son $" + resultado);

    }
}