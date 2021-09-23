public class TablaWhile{

    public static void main(String args[]){
        int tabla = 9;
        int limite = 10;

        int contador = 1;

        while(contador <= limite){
            System.out.println(tabla + " x "+ contador + " = " + (tabla * contador));
            contador++;
        }
        System.out.println("Termino while");
        System.out.println("*************");

        contador = 1;

        do{
            System.out.println(tabla + " x "+ contador + " = " + (tabla * contador));
            contador++;
        }while(contador <= limite);
        System.out.println("Termino Do-while");
    }
}