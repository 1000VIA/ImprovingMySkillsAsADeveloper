/**
 * Por qué usar la sintaxis de clase?
 * 1. Las clases funcionan muy parecido a la declaración LET.
 * 2. Todo el código de una función, funciona en modo estricto => "stricmode"
 * 3. Todo los métodos no son enumerables.
 * 4. Todo los métodos internos no tienen un constructor, por consecuencia no se pueden llamar con el método new.
 * 5. llamar una clase sin el "new" generará un error.
 * 6. Intentar renombrar el nombre de la clase dentro de un método de la misma generará un error.
 * 7. Las clases tienen métodos estáticos y métodos privados.
 */

/**
 *  Clases como expresiones
 */

let Persona = class{
    constructor(){
        this.nombre = "Milvia",
        this.edad = 32,
        this.direccion = "Tú! gracias por estar aquí"
    }
    decirNombre(){
        console.log("Milvia");
    }
}

let milvia = new Persona("Milvia");

milvia.decirNombre();

console.log( typeof Persona );//Se pregunta de  que tipo es la clase persona
console.log( milvia instanceof Persona );//preguntar si milvia es una instancia de la clase Persona


console.log( "==================");

//Esto es una función echa expreción.
let miFuncion = ()=> console.log("Hola Mundo");

let otraFuncin = miFuncion;

console.log( typeof otraFuncin );

otraFuncin();
