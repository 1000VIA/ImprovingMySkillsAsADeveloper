
/**
 * Removiendo valores
 */

let items = new Set([1, 2, 3, 4, 5]);

console.log( items.size, "Lo que tengo originalmente" );//Para saber cuantos elementos existen en el arreglo

items.delete( 3 ); //Elimino elemento 3
items.add( 10 );

console.log( items.size, "Lo que me queda");

console.log(items);//Elementos del arreglo


//Para limpiar todo el set

items.clear(items.size)
console.log(items,"Lo que llega" );//Un obj vacio porque con el clear, lo que se hace el limpiar el obj.



