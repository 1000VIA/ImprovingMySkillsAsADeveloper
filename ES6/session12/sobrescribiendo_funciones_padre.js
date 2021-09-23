/**
 * Sobrescribiendo funciones del padre
 */

class Rectangulo{
    constructor(alto, largo){
        this.alto = alto;
        this.largo = largo;
    }

    getArea(){
        return  `Rectangulo: ${this.alto * this.largo}`;
    }

}

//extends permite extender o heredar todo los mecanismos, métodos y propiedades que tenga la clase padre. 
class Cuadrado extends Rectangulo {

    constructor(alto){
        super( alto, alto )//Ejecuta el constructor del padre
    }

    getArea(){

        //Me retorna getArea de la clase Cuadrado
        // return "Cuadrado: " + (this.alto * this.alto);

        //En caso de que necesite ejecutar el getArea pero de la clase padre.
        return super.getArea();//Me retorna getArea de la clase Rectangulo.
    }
}

let cuadrado = new Cuadrado( 4 );
let rectangulo = new Rectangulo(3,2);

console.log( cuadrado.getArea() );
console.log( rectangulo.getArea() );
