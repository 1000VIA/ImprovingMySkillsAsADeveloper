
/**
 * Introducción a los Símbolos.
 * Son un tipo de dato único... nuevo... diferente...
 * 1. undefined
 * 2. null
 * 3. boolean
 * 4. number
 * 5. string
 * 6. object
 * Símbolos y propiedades
 */

//Lo simbolos no son un constructor, por eso no llevan la palabra NEW, de lo contrario genera un error de sintaxis.


let primerNombre = Symbol("primer nombre");
let segundoNombre = Symbol();
let persona = {
    [segundoNombre]:"Amparo" // Se puede hacer de esta forma.
};
persona[primerNombre] = "Milvia";// O sepuede hacer de esta forma.

console.log(persona[primerNombre]);
console.log(persona[segundoNombre]);
console.log(primerNombre);
console.log(segundoNombre);


//Los simbolos siempre son diferentes, esa es su caracteristica principal.
let simbolo1 = Symbol("simbolo");
let simbolo2 = Symbol("simbolo");

console.log( simbolo1 == simbolo2 );
console.log( simbolo1 === simbolo2 );
console.log( Object.is(simbolo1, simbolo2) );

//cuando quiero saber que tipo de dato es algo
console.log(typeof primerNombre);

//No se puede convertir un simbolo a su valor string, porque es un valor primitivo.

// console.log( " Mi simbolo: " + primerNombre );
// console.log( `Mi simbolo:  ${ primerNombre } ` );

console.log( `primer nombre` in persona );// Pregunto si primer nombre existe dentro de persona.
console.log(  persona[primerNombre] );