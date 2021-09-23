
/**
 *   WeakSets
 * Trabajan de una manera similar a los sets.
 * Solo sirven para almacenar referencia de los objetos, unicamente.
 * - En un weekset, ADD(), HAS(), REMOVE(), dan un error si enviamos como parámetro algo que no sea un objeto.
 * - No tiene manera de hacer repeticiones o ciclos for in.
 * - los weeksets no tienen key(), values(), por lo que no hay manera vía programación de saber cuantos elementos hay dentro.
 * - No tienen un for-each tampoco.
 * - No tienen propiedades size.
 */


let set = new WeakSet();//Declaramos el Set().

//Agrego dos personas.
let persona1 = {
    nombre:"Milvia"
};

let persona2 = {
    nombre2:"Dayana"
};

//Adiciono las personas al set.
set.add(persona1);
set.add(persona1);

//Elimino un registro.
set.delete(persona1);

//Muestro el set en la terminal.
console.log(set);
