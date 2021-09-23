
/**
 *  Cambiar el prototipo de un objeto
 * Los prototipos: La POO (Programación Orientada a Objetos) de JS se encontraba basada en prototipos y no en clases.
 * (ES6 introduce a clases).
 * Los prototipos son un conjunto de normas para integrar Programción Orientada a Objetos en JS. Pero con los prototipos, nosotros somos capaces de realizar tareas como:
 * - Herencia.
 * - Encapsulamiento.
 * - Abstracción
 * - Polimorfismo
 */

//ES6

let gato = {
    sonido(){
        console.log("Miau!");
    },
    chillido(){
        console.log("MIAU!!!!");
    }
}

let perro = {
    sonido(){
        console.log("Guau!!");
    }
}

//ES5
let angora = Object.create(gato);//Creo un nuevo gato
console.log(Object.getPrototypeOf(angora) === gato);//Pregunto si el angora tien el prototipo de un gato.

angora.sonido();
angora.chillido();


//Para cambiar el prototipo a un objeto
Object.setPrototypeOf(angora, perro);

//ES6
//EL gato deja de ser gato y se convierte en un perro, por eso ya no tiene la propiedad chillido y nos genera un error.
console.log(Object.getPrototypeOf(angora) === gato);//Pregunto si el angora tien el prototipo de un gato.

angora.sonido();
angora.chillido();