/**
 * Herencia de las Clases: tranferirle métodos o propiedades a un hijo
 */

class Rectangulo{
    constructor(alto, largo){
        this.alto = alto;
        this.largo = largo;
    }

    getArea(){
        return this.alto * this.largo;
    }

}

let rectangulo = new Rectangulo(3,2);

console.log(rectangulo.getArea());



//extends permite extender o heredar todo los mecanismos, métodos y propiedades que tenga la clase padre. 
class Cuadrado extends Rectangulo {

    constructor(alto){
        super( alto, alto )//Ejecuta el constructor del padre
    }
}

let cuadrado = new Cuadrado( 3 );

console.log( cuadrado.getArea() );

console.log( ( cuadrado instanceof Cuadrado ) );
console.log( ( cuadrado instanceof Rectangulo ) );