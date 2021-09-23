/**
 * Maps 
 * Nuevo tipo de colección de datos que por mucho tiempo fue necesario en el JS.
 * Es una coleccion de datos que tienen una llave y tiene un valor.
 * Tienen: 
 * 1. Has()
 * 2. delete()
 * 2. clear()
 * 4. size()
 * 5. interacions
 */
//Mapas y sus métodos

let mapa = new Map();

//El primer volor es la llave =>  "nombre".
mapa.set( "nombre", "Milvia" );
mapa.set( "edad", 32 );//Se pude meter cualquier tipo de dato.
mapa.set( "apellido","Alvarez" );
mapa.set( {}, {hola:"Hola Mundo!!!"} );

console.log(mapa);
console.log(mapa.size);
console.log( "==================");

console.log(mapa.get("nombre"));//Para obtener el nombre
console.log(mapa.get("edad"));//Para obtener la edad
console.log(mapa.has("nombre"));//Si queremos verificar que la llave nombre existe
console.log(mapa.has("apellido"));//Si queremos verificar que la llave apellido existe
console.log( "==================");

mapa.delete("nombre");//Eliminamos la llave "nombre"
console.log(mapa.has("nombre")); 
console.log( mapa.get("nombre") );//Retorna un => undefined porque ya se eliminó.
console.log( "==================");

//Si lo unico que quiero es borrar el valor de la llave, pero que el nombre siga existiendo 
mapa.set("edad");//Elimina el valor pero la llave sigue existiendo.
console.log(mapa);
console.log( "==================");

//Eliminar todo el map
mapa.clear();
console.log(mapa);//retorna un {}
