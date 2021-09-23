
/**
 *  Compartiendo símbolos - Symbol.for() y Symbol.keyFor()
 */

//SI queremos verificar de que ese simbolo no esté creado o si esxiste usarlo, se usa la propiedad del simbolo for().
let userID = Symbol.for("userID");

let objeto = {};

objeto[userID] = "12345"

console.log(objeto[userID]);
console.log(userID);

//Suponiendo que en otro archivo voy a hacer referencia a ese simbolo.
let userID2 = Symbol.for("userID");

console.log(userID == userID2);
console.log(userID === userID2);
console.log( Object.is(userID, userID2) );

//Apuntan al mismo elemento y se pueden usar para obtener el mismo valo de la propiedad.
console.log( objeto[userID2] );
console.log( userID2 );

//La posibilidad de tener el mismo alias o llave que es usada.

let id = Symbol.for("id único");
//Para recuperar la el estring => "id único"
console.log( Symbol.keyFor( id ));


let id2 = Symbol.for("id único");//Creo el simbolo
console.log( Symbol.keyFor( id2 )); //Apuntan al mismo lado, 

console.log(id === id2);

let id3 = Symbol("id único");//Estamos creando un nuevo simbolo.
console.log( Symbol.keyFor( id3 ));//retorna un "undefined" porque no existe nada asociado en la pila por el id3