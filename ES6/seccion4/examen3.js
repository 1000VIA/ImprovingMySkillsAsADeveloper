/**
 * Examen #3
 */

/**
 * Pregunta 1:
 * Que valor imprimirá en consola:
 * R// Matamoros undefined => Los parametros se asignan en el mismo orden 
 * en el que son definidos en la función, por consecuencia, 
 * cuando mandamos "Matamoros", es asignado al nombre y no al apellido.
 */

 function saludar(nombre = "Juan", apellido){
  console.log(`${nombre} ${apellido}`);
 }
 saludar("Matamoros");
 

/**
 * Pregunta 2:
 * Un parámetro opcional puede ser:
 * - un arreglo
 * - un objeto
 * - una función 
 * - un dato primitivo
 * R// Todas las anteriores => Un parámetro opcional, 
 * puede ser cualquier cosa que se le pueda enviar a una función por parámetro.
 */

/**
 * Pregunta 3:
 * Que imprime en consola:
 * R// ['Juan', 'Carlos', 30, 'San José'] => Arguments es un objeto de las 
 * funciones normales, que muestra todos los parámetros enviados a la 
 * función aunque no estén definidos explícitamente.
 */

 function crear_persona(){
  console.log(arguments);
 }
 crear_persona("Juan","Carlos",30, "San José");

 /**
 * Pregunta 4:
 * Qué imprime en consola?
 * R// [] un arreglo vacio => Argumens es un arreglo de los 
 * parametros que enviamos a la función al momento de ejecutarla.
 * En este caso no estamos mandando ningún argumento o parámetro.
 */

  function crear_persona(nombre="Fernando", apellido = "Herrera"){
    console.log(arguments);
   }
   crear_persona();

  /**
 * Pregunta 5:
 * Los parámetros REST, se pueden entender como el resto de los parámetros enviados a una función?
 * R// Verdadero.
 */


/**
 * Pregunta 6:
 * En el ES5, los parámetros rest eran definidos al momento de crear las funciones (similar al arguments)
 * R// False => En el ECMAScript 5, no existía los parámetros rest, 
 * se puede tener la funcionalidad utilizando arguments, pero no es lo mismo. 
 */


/**
 * Pregunta 7:
 * El parámetro rest debe de ser el primer parámetro solicitado en la función?
 * R// False 
 */

/**
 * Pregunta 8:
 * El operador SPREAD separa, mientras que el operador REST une
 * R// Verdadero
 */

/**
 * Pregunta 9:
 * El operador Spread puede ser utilizado dentro de arreglos para unir los elementos de forma independiente?
 * R// Verdadero
 */

/**
 * Pregunta 10:
 * new.target, Sirve para?
 * R// Se puede utilizar para asegurarnos que la función fue creada utilizando el new.
 */