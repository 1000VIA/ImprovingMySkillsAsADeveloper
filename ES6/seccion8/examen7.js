/**
 * Examen #7
 */

/**
 * Pregunta 1:
 * Qué es un símbolo en ES6?
 * R// Es un nuevo tipo de valor primitivo
 */

/**
 * Pregunta 2:
 * Para qué nos pueden servir los símbolos?
 * R// Para asegurarnos que nuestras propiedades son nombradas de manera única.
 */

/**
 * Pregunta 3:
 * Cuál es la salida del siguiente código:
 * R// undefined => Las propiedades con simbolos, se deben de llamar siempre con las llaves cuadradas "[ ]" si no,
 * es como querer accesar una propiedad que no esta definida en el objeto.
 */
 let id = Symbol();
 let vehiculo = {
  [id]: 12
 };
  
 console.log( vehiculo.id );

 /**
 * Pregunta 4:
 * Cual es la salida del siguiente código:
 * R// "Maria" => Mismo caso del anterior, la notación de punto, hace referencia a las 
 * propiedades normales del objeto.
 */


let nombre = Symbol();
 
let persona = {
 [nombre]: "Fernando",
 nombre: "María"
};
 
console.log( persona.nombre );

 /**
 * Pregunta 5:
 * Son iguales?
 * R// False => Aunque tengan el mismo alias, tienen valores totalmente diferentes.
 */

let simbolo1 = Symbol('simbolo');
let simbolo2 = Symbol('simbolo');
 
console.log(simbolo1 === simbolo2 );

 /**
 * Pregunta 6:
 * Son iguales?
 * R//Verdadero => En este caso, si es verdadero, porque el Symbol.for, verifica si existe el símbolo, si no,
 * lo creara... en la segunda línea, busca el símbolo y lo encuentra, por eso le asigna el
 * mismo valor que tenia el símbolo original.
 */

let simbolo1 = Symbol.for('simbolo');
let simbolo2 = Symbol.for('simbolo');
 
console.log(simbolo1 === simbolo2 );

/**
 * Pregunta 7:
 * Razone el siguiente código y seleccione la respuesta que corresponde a la salida en consola.
 * R// 3501 => La coercion en JavaScript permite convertir los valores 
 * para poder realizar este tipo de cálculos.
 */

let salario = 1500;
let salaroTexto = "2000";
let pagar = true;
 
console.log( salario + Number(salaroTexto) + pagar   );

/**
 *  Pregunta 8:
 * Cuál será la salida de consola?
 * R// Error de sintaxis: El simbolo no tiene un constructor. => Los símbolos no tienen constructores, por 
 * lo que si se intentan llamar con el "NEW",dará: TypeError: Symbol is not a constructor at new Symbol
 */

let salario = 1500;
let salaroTexto = "2000";
let pagar = true;
let bonificacion = new Symbol("50");
 
console.log( salario + Number(salaroTexto) + pagar + Number(bonificacion)  );

/**
 * Pregunta 9:
 * Cuál función necesito ejecutar, si quiero traer todas las propiedades NO SÍMBOLO de un objeto.
 * R// Object.keys(OBJ)
 */

/**
 * Pregunta 10:
 * La función Object.getOwnPropertySymbols( OBJ ), 
 * permite recuperar un arreglo de todas las propiedades que tenga el objeto que sean símbolo.
 * R// True
 */
