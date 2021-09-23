
/**
 *  Introducción - Set
 * - Son una lista ordenada de valores sin duplicados.
 * - Permiten un rápido acceso a la data que contienen.
 * - Los SET pueden ser cualquier cosas.
 * JS solo tiene arreglos.
 */


//Creando sets - agregando items y buscando elementos

let item = new Set([1, 2, 3,4, 5, 6, 7, 7, 7, 7, 7, 7, 7]);

//Para hace la búsqueda y saber si un elemento existe o no

console.log( item.has(1) );// Recibe un boolean.


console.log("===================👉=========================");

let item1 = new Set([1, 2, 3,4, 5, 6, 7, 7, 7, 7, 7, 7, 7]);

console.log(item1);
console.log(item1.size);


console.log("===================👉=========================");

let item2 = new Set()

item2.add( 10 );
item2.add( 11 );
item2.add( 8 );
item2.add( 7 );
item2.add( 7 );//No permite repetir elementos porque ya existe, es la principal característica.
item2.add( "7" ); //es diferente, es por eso que lo acepta
item2.add( 7 );

console.log( item2.size ); 

console.log(item2);