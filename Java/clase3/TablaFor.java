public class TablaFor{

    public static void main(String args[]){

        int tabla = 7; // Tabla del 7

        /*Las 3 formas son exactamente lo mismo
         * x = x + 1;
         * x += 1;
         * x++;
         */

        for(int x  = 1; x <= 10; x++ ){

            int multiplicacion = tabla * x;

            System.out.println(tabla +" x " + x +" = " + multiplicacion);

        }

        System.out.println("Terminó");
    
    }
}

