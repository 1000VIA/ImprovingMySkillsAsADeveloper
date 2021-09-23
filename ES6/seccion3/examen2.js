/**
 * Examen #2
 */

/**
 * Pregunta 1:
 * El resultado del siguiente código es:
 * R// startsWith no es una función => startsWith junto con includes y endsWith, 
 * son funciones especiales de los STRINGS, y en este caso "numero" 
 * no es una cadena de caracteres.
 */
 let numero = 10;
 
 console.log(  numero.startsWith("1") );

/**
 * Pregunta 2:
 * Cual es el resultado del siguiente código:
 * R// False => las funciones son CaSeSeNsItIvE, es decir, que las mayúsculas 
 * y minúsculas son diferentes.
 */

let texto = "Que tal estas Juan!";
 
console.log(  texto.includes("j") );


/**
 * Pregunta 3:
 * Qué se imprime en consola cuando ejecutamos este código?
 * R// repeat no es una función => Mismo caso anterior, "repeat()" es solo para cadenas de caracteres.
 */
 let texto = 10;
 
 console.log(  texto.repeat(2) );
 
 /**
 * Pregunta 4:
 * Dada las siguientes 3 declaraciones de variables, podemos decir que su valor es y
 * será el mismo tras hacer una comparación "===" entre las 3 variables? 
 * R// Son exactamente iguales => Puedes comprobarlo haciendo esto: 
 * console.log( ( texto1 === texto2 ) && ( texto2 === texto3 ) );
 */
  let texto1 = "Hola";
  let texto2 = 'Hola';
  let texto3 = `Hola`;

  /**
 * Pregunta 5:
 * Analice y seleccione la respuesta correcta:
 * R// True, salida1 y salida2, son exactamente iguales.
 */
   let nombre = "Maria";
 
   let salida1 = `El nombre de ella es ${nombre}`;
   let salida2 = 'El nombre de ella es Maria';
    
   console.log( salida1 === salida2 );

/**
 * Pregunta 6:
 * Los TAGs en los templates literales, son funciones que pueden modificar 
 * completamente la variable de texto?
 * R// Si, pueden cambiar todo el contenido.
 */


/**
 * Pregunta 7:
 * La función String.raw, no es necesario crearla, ya que se encuentra definida
 *  como una función dentro del objeto String?
 * R//  Correcto, así es 
 */

/**
 * Pregunta 8:
 * La función String.raw, nos permite trabajar con todos los caracteres 
 * de una cadena de texto? (incluyendo caracteres especiales)
 * R//True
 */
 