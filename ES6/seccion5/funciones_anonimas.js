
/**
 *   Creando funciones anónimas
 */

//ES5
let saludo = (nombre =>`Hola ${nombre}`)("Dayana");

console.log(saludo);

//ES5
var saludo1 = function(nombre){
    return "Hola " + nombre
}("Milvia")

console.log(saludo1);
