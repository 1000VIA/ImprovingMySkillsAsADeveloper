//Realiza un progra,a para conversión de unidades, de cetímetros a pulgadas y de pulgadas a centímetros.
// 2.54 cm = 1inch
public class Conversiones{

    public static void main(String[] args){
        //2.54cm = 1 inch

        double valor = 10; //10 centimetros a pulgadas
        double centimetros = 2.54;
        double pulgada = 1;

        double resultado = (valor * pulgada)/ centimetros;

        System.out.println(resultado + " pulgadas");

        double valorPulgadas = 5;
        double resultado2 = (valorPulgadas*centimetros)/1;

        System.out.println(resultado2 + " centimetros");


    }
}

