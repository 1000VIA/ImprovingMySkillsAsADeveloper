
/**
 *  Coerción de los símbolos
 */

let id = Symbol.for("id");
let numero = 10;
let texto = "10";
let bool = true;
let notAN = NaN;

console.log( numero + texto);
console.log( numero + Number(texto));//En caso de que quisiera sumarlo, debo convertirlo a número.
console.log( numero  + notAN);//si sumo un número con un NaN retorna un: NaN.
console.log( bool  + bool);//Convierte automaticamente el valor boolean a su representación numerica, que en este caso sería 1.

//Pero con los Symbolos no puedo sumar un texto con un id.
// console.log( texto  + id);//No puede convertir el symbolo a su representación string.


console.log( `Mi simbolo es: ${String(id)}` );//Le indico a JS que lo convierta a un string para poderlo sumar.