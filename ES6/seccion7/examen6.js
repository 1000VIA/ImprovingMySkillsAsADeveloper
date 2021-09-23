/**
 * Examen #6
 */

/**
 * Pregunta 1:
 * En el ES6, es posible realizar la POO (programación orientada a objetos), ya que existen clases.
 * R// Verdadero
 */


/**
 * Pregunta 2:
 * Si necesito pasar los prototipos de un objeto a otro, que función puedo llamar?
 * R// Object.setPrototypeOf(objetoReceptor, objetoDonador)
 */

/**
 * Pregunta 3:
 * super, es una instrucción en el ES6 que permite llamar propiedades del prototipo padre, desde el hijo?
 * R// Verdadero
 */


 /**
 * Pregunta 4:
 * La desestructructuración de objetos, permite un acceso rápido a las propiedades dentro de los objetos?
 * R// Verdadero
 */


  /**
 * Pregunta 5:
 * Dado el siguiente código, determine la salida:
 * R// No puede imprimir...
 */
   let opciones = {
    imprime: false,
    soloLectura: true
   };
    
   let { imprime } = opciones;
    
   if( imprime ){
    console.log("Imprimiendo...");
   }else{
    console.log("No puede imprimir...");
   }


/**
 * Pregunta 6:
 * Dado el siguiente código, determine la salida:
 * R// No puede escribir... => puedeEscribir tiene un valor "undefined", 
 * pero la condición cumple el "ELSE", ya que "undefined" no es igual a TRUE, 
 * por lo que ejecuta el "sino"
 */

 let opciones = {
  imprime: false,
  soloLectura: true
 };
  
 let { puedeEscribir } = opciones;
  
 if( puedeEscribir ){
  console.log("Escribiendo...");
 }else{
  console.log("No puede escribir...");
 }

/**
 * Pregunta 7:
 * El orden en el que aparecen las propiedades en el objeto, influye en el orden en el que se pueden destructurar?
 * R// Falso
 */

/**
 * Pregunta 8:
 * En la destructuración, podemos inicializar variables?
 * R// Verdadero
 */
 

/**
 * Pregunta 9:
 * Determine cual es la salida del siguiente código:
 * R// Escribiendo... => Se inicializa la variable "puedeEscribir" en la destructuración.
 */
 let opciones = {
  imprime: false,
  soloLectura: true
 };
  
 let { puedeEscribir = true } = opciones;
  
 if( puedeEscribir ){
  console.log("Escribiendo...");
 }else{
  console.log("No puede escribir...");
 }

/**
 * Pregunta 10:
 * Cual es la salida del siguiente código:
 * R// toyota
 */
 let carros = ["mazda","honda","toyota"];
 
 let [,,carro] = carros;
  
 console.log( carro );