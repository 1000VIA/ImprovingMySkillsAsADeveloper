/**
 * Examen #9
 */

/**
 * Pregunta 1:
 * ¿Los mapas son un nuevo tipo de colección de datos?
 * R// Verdadero
 */

/**
 * Pregunta 2:
 * ¿Todos los mapas tienen al menos una llaves y valores?
 * R// Verdadero
 */

/**
 * Pregunta 3:
 * Dado el siguiente código, ¿Cuál es la salida en consola?
 * R// Map(1) {undefined => undefined}
 */
 let mapa1 = new Map([[]]);
 
 console.log( mapa1 );

 /**
 * Pregunta 4:
 * Dato el siguiente código, ¿Cuál es la salida en consola?
 * R// true => Esta preguntando, si el "undefined" existe en el Mapa,
 * y como lo inicializamos con un par de valores "undefined", por eso retorna true
 */
  let mapa2 = new Map([[]]);
  console.log( mapa2.has() );//undefined === undefined => true

  /**
 * Pregunta 5:
 * ¿Qué retorna el siguiente código?
 * R// false => "fernando" no es llave del mapa, es un valor de la llave "nombre", por eso retorna FALSE.
 */

   let mapa3 = new Map([["nombre","fernando"],["apellido","herrera"]]);
 
   console.log( mapa3.has("fernando") );

/**
 * Pregunta 6:
 * ¿Cuál es la salida del siguiente código?
 * R// "fernando" => Se esta solicitando obtener el valor de la llave "nombre".
 */

 let mapa = new Map([["nombre","fernando"],["apellido","herrera"]]);
 console.log( mapa.get("nombre") );

/**
 * Pregunta 7:
 * ¿Qué instrucción borra todos los registros de un mapa?
 * R// clear() => 
 */

/**
 * Pregunta 8:
 * Para inicializar un mapa, ¿que tenemos que mandar en su constructor?
 * R// Un arreglo de arreglos
 */

/**
 * Pregunta 9:
 * ¿Los mapas permiten nombres de llaves duplicadas?
 * R// Falso
 */

/**
 * Pregunta 10:
 * ¿Los mapas permiten tener objetos como valores?
 * R// Verdadero
 */