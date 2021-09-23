//Calcular el área de un cuadrado, de un triangulo, de un rectangulo.
public class Figuras{

    public static void main(String args[]){

        //área cuadrado

        double lado = 15;
        double areaCuadrado = lado * lado;

        //área del rectángulo

        double base = 9;
        double altura = 4;

        double areaRectangulo = base * altura;

        //área del triangulo

        double baseTriangulo = 3.4;
        double alturaTriangulo = 5.6;

        double areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

        System.out.println("El área del cuadrado es: " + areaCuadrado);
        System.out.println("El área del rectángulo es: " + areaRectangulo);
        System.out.println("El área del triangulo es: " + areaTriangulo);

    }
}