/**
 * Clases como parámetros.
 */

const creadorClase = (definicionClase) => {
    return new definicionClase();
}

let objeto = creadorClase(class{ //Definir la clase en tiempo de ejecución y la mandamos a la función creada antes.
    constructor(){
        this.nombre = "Milvia",
        this.edad = 32,
        this.direccion = "Tú! gracias por estar aquí"
    }

    saludar(){
        console.log("Hola!!!");
    }
});

objeto.saludar();

//Mandar clases com parámetros

class Cuadrado{
    constructor(lado){
        this.lado = lado;
    }
    getArea(){
        return this.lado * this.lado;
    }
    
}

const imprimirCuadrado = (cuadrado) => {//La función llama el método de la impresión
    
    if( !(cuadrado instanceof Cuadrado) ){
        console.error("Ell parámetro enviado no es un cuadrado");
        return;
    }

    console.log( cuadrado.getArea() );
}

//para usarlo 
// let mesa = "123";

let mesa = new Cuadrado(10);

imprimirCuadrado(mesa);