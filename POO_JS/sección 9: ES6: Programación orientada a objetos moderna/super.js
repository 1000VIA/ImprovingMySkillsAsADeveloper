/**
 *  La palabra clave super
 * Cuando usamos la herencia, podemos utilizar
 * "super" desde la clase hijo para llamar una 
 * propiedad o método de la clase padre.
 * - llama al métoso contructor de la clase padre super([arguments]);
 * - llama cualquier otro método de la clase padre.
 * super.functionOnParent([arguments]);
 * - Cuando es usado en un contructor, la palabra clave super 
 * aparece sola lo cual invoca el contructor del objeto padre.
 * - En este caso debe usarse antes que la palabra clave this sea usada.
 * - La palabra clave super también puede utilizarse para llamar otra 
 * función del objeto padre.
 */

class Rectangulo{
    constructor(altura, ancho){
        this.nombre = "Rectangulo";
        this.altura = altura;
        this.ancho = ancho;
    }

    saludo(){
        document.write(`Hola soy un ${this.nombre}`);
    }

    get area(){
        return this.altura * this.ancho;
    }

    set area(valor){
        this.altura = this.ancho - Math.sqrt(valor);
    }
}

class Cuadrado extends Rectangulo{
    constructor(altura){
        // this.altura;

        super(altura, altura);

        this.name = "Cuadrado"
    }
}

let miCuadrado = new Cuadrado( 10 );

// miCuadrado.saludo();

miCuadrado.area = 50

document.write( miCuadrado.area);


