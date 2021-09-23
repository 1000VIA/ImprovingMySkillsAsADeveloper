
/**
 *  Orden de enumeración de las propiedades de los objetos
 * {
 *  nombre:"Milvia",
 *  apellido:"Alvarez",
 *  edad: 32,
 *  bio:"Frontend Developer",
 *  2:"Nada en particular"
 * }
 * -2
 * -nombre
 * -apellido
 * -bio
 * -------------------------------------------------------
 * -Todas las llaves van en orden asencende
 * -Todas la llaves tipo string, van ordenadas en la manera que fueron agregadas al objeto.
 * -Todos los símbolos en el ordenn que fueron agregados al objeto
 */

//ES6

// 1. 0,2,3,15,c,x,r,b,d,a => numeros de forma acendiente y las letras en el orden que fueron agregadas.

var objeto = {
    c:1,
    0:1,
    x:1,
    15:1,
    r:1,
    3:1,
    b:1
};

objeto.d = 1;
objeto["2"] = 1;
objeto["a"] = 1;//ultima en agregar

console.log(Object.getOwnPropertyNames(objeto).join(",")); //Regresa un arreglo
console.log(Object.keys(objeto));// Regresa un arreglo ordenado.
console.log(JSON.stringify(objeto));// Regresa un arreglo ordenado.

// Regresa un arreglo ordenado, solo que haci abajo.
for(i in Object.keys(objeto)){
    console.log(Object.keys(objeto)[i]);
}