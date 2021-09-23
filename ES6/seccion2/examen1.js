/**
 * Examen #1
 */

/**
 * Pregunta 1:
 * Las constantes se pueden actualizar siempre y cuando no estén en el mismo bloque de código?
 * R// Verdadedo
 */

/**
 * Pregunta 2:
 * Por qué es más seguro utilizar LET en lugar del VAR?
 * R// Porque obliga a declarar variables antes de utilizarlas y evita la redeclaración.
 */

/**
 * Pregunta 3:
 * El siguiente código es válido en ES6?
 * R// Verdadero => Lo expresado es un código perfectamente válido en JavaScript, no importa si es ES6.
 */
  var variable = "Hola Mundo";
  var variable = "Hola Mundo";
  var variable = "Hola Mundo";
  var variable = "Hola Mundo";
  var variable = "Hola Mundo";
  console.log( variable );
 
 /**
 * Pregunta 4:
 * Todo el código escrito en ES5 es compatible en ES6?
 * R// Verdadero
 */

  /**
 * Pregunta 5:
 * Dado el siguiente código, determine su salida y por qué?
 * R// Imprime "Roberto" en la consola, ya qye es el valor de la variable al momento de imprimir.
 */
   let nombre = "Roberto";
 
   if( nombre === "Roberto" ){    
      let nombre = "Juan Carlos";
   }
    
   console.log(nombre);

/**
 * Pregunta 6:
 * Cuál es el resultado en consola del siguiente código?
 * R// Muestra en consola el objeto "OPCIONES" sin problema.
 */
 const OPCIONES = {};
 
 OPCIONES.audio = true;
 OPCIONES.video = false;
  
 console.log( OPCIONES );

/**
 * Pregunta 7:
 * Cuál es el resultado de la consola:
 * R// String
 */

/**
 * Pregunta 8:
 * Mire el siguiente código, analice y seleccione la justificación del resultado de la consola.
 * R// El valor de "numero" es 10: porque cada declaración de esa variable se encuentra dentro de un bloque diferente.
 */
 let numero = 10;
 
if( true ){ 
    let numero = 20;
    
    while(true){ 
        let numero = 20; 
        
        for(let numero = 1; numero < 10; numero ++){ 
            numero = numero; 
        } break; 
   }
}
 
console.log(numero);