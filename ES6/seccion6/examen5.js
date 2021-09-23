/**
 * Examen #5
 */

/**
 * Pregunta 1:
 * Qué aparecerá en la consola?
 * R// objeto{marca: 'Mazda', tipo: 'Sedan', anio: 2020}
 */

 function crearCarro( marca, modelo, anio ){
  return {
          marca,
          tipo: modelo,
          anio
          }
}

let mazda = crearCarro( "Mazda", "Sedan", 2020 );

console.log( mazda );


/**
 * Pregunta 2:
 * En los objetos literales, podemos evitar el uso repetitivo de nombres de propiedades 
 * y nombres de variables siempre y cuando la variable que queremos agregar al objeto exista.
 * R// Verdadero.
 */

/**
 * Pregunta 3:
 * Qué son métodos concisos?
 * R// Son métodos comunes y corrientes, solo que podemos omitir la palabra "funcion"
 */


 /**
 * Pregunta 4:
 * Los nombres de las propiedades computadas pueden tener espacios en blanco?
 * R// Verdadero
 */


  /**
 * Pregunta 5:
 * El siguiente código es válido?
 * R// Verdadero => Los nombres computados, pueden tener ciertos caracteres especiales, 
 * en el ejemplo expuesto, es totalmente válido.
 */
   let persona = {};
   persona["!nombre-completo*"] = "Maria Susana Perez";
   console.log(persona["!nombre-completo*"])


/**
 * Pregunta 6:
 * El siguiente código es válido en ES6?
 * R// Verdadero => Las propiedades computadas pueden tener funciones sin ningún problema.
 */

 let persona = {
  [getPropiedad()]:"Maria Susana Perez"
  };

  function getPropiedad(){
  return "nombre";
  }

  console.log( persona[ getPropiedad() ] );

/**
 * Pregunta 7:
 * Object.is(), es más confiable que el === ?
 * R// verdadero => Es más confiable, pero en casos donde realmente necesitemos algo más exacto y precisa.
 */

/**
 * Pregunta 8:
 * La respuesta es:
 * R// Verdadero
 */
 console.log( Object.is( NaN, NaN ) ); 

/**
 * Pregunta 9:
 * Object.assign(), nos permite tomar todas las propiedades de un objeto y trasferirlas a otro?
 * R// Verdadero
 */

/**
 * Pregunta 10:
 * En el ES6, se ha estandarizado el orden de las propiedades de los objetos?
 * R// Verdadero
 */