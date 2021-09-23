
/**
 * startsWith - endsWith - includes
 */


var saludo = "Hola Mundo!";

//ES5
console.log( saludo.substr(0, 1) === "H");
console.log( saludo.indexOf("x"));

//ES6
//startsWith => se usa para saber con qué letra o palabra empieza nuestro string.
//endsWith => se usa para saber con qué letra o palabra termina nuestro string.
/*  includes => Me permite saber si la palabra o el string contiene una letra en particular o alguna cadena de texto, 
    esto regresa la la pocición de donde la encuentra, en caso contrario regresa un -1;
*/ 
console.log( saludo.startsWith("Hola"));//regresa un boolean
console.log( saludo.endsWith("Mundo!")); //regresa un true
console.log( saludo.includes("x"));//-1

//Esto es en base al caracter.
console.log( saludo.startsWith("Mu", 5));

console.log( saludo.includes("a", 5));






