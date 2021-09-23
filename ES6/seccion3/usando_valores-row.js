
/**
 *  Usando valores "raw" (crudos) en templates literales
 */


let mensaje = "Hola \nMundo\\";

mensaje2 = String.raw`Hola \nMundo\\`

//Los tags solo funcionan con literal templete
var mensaje3 = String.raw`Hola \nMundo\\`

console.log(mensaje);
console.log(mensaje2);
console.log(mensaje3);
