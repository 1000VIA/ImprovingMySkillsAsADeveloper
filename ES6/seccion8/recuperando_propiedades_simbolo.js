
/**
 *  Recuperando las propiedades símbolo
 * Las propiedades con simbolos, se deben de llamar siempre con las llaves cuadradas "[ ]" 
 * si no, es como querer accesar una propiedad que no esta definida en el objeto.
 */

let id = Symbol.for("id");
let activo = Symbol.for("activo");

let persona = {
    [id]:"123",//Se adicina un simbolo al objeto persona.
    [activo]: true,
    ["Código"]: "1000VIA",
    nombre:"Milvia",
    apellido:"Alvarez",
    edad: 32
}

console.log( Object.keys(persona) );

//Suponiendo que debo de barrer todas las propiedades de esa persona, pera ver si le falta algo o si la quiero clonar.

for (const key in persona) {
    console.log( key, persona[key] );
}

//ES6

let simbolos = Object.getOwnPropertySymbols(persona);
console.log( simbolos );

for (i in simbolos ){
console.log(simbolos[i], Symbol.keyFor(simbolos[i]));//Al recorrer el objeto me retorna los simbolos, los optenemos por su referencia. 
}