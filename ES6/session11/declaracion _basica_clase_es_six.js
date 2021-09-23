/**
 * Declaración básica de una clase en ES6
 */

//ES6

//Defenición básica de una clase.
class Persona{
    constructor(nombre){ //creamos el constructor,es el que nos permite hacer todas las inicializaciones de la clase al momento de ser usada.
        this.nombre = nombre;
    }
    
    //Persona.prototype.decirNombre()
    decirNombre(){ //Agregamos la función
        console.log(this.nombre);
    }
}

//para usar la clase
let milvia = new Persona("Milvia"); //Siempre debe de llevar la palabra new

milvia.decirNombre();


console.log( milvia instanceof Persona );//preguntar si milvia es una instancia de la clase Persona
console.log( milvia instanceof Object );//preguntar si milvia es de tipo objeto

console.log( typeof Persona );//Se pregunta de  que tipo es la clase persona, auque regresa tipo function, debería ser clase

console.log( typeof Persona.prototype.decirNombre );