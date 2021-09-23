
/**
 * Pregunta 1:
 * ¿Cuantos arreglos de datos existían en el ECMAScript 5? 
 * R// 1 => Solo los arreglos.
 */

/**
 * Pregunta 2:
 * ¿Qué es un SET de ES6?
 * R// Un nuevo tipo de colección de datos.
 */

/**
 * Pregunta 3:
 * ¿Un set permite registros duplicados?
 * R// False
 */

/**
 * Pregunta 4:
 * ¿Qué sucede con el siguiente código?
 * R//Se crea un set y se agregan 2 elementos =>Acepta ambos, porque recordemos que se comparan con un Object.is,
 * cosa que un 2 y un "2" son cosas totalmente diferentes.
 */
 let numeros = new Set();
 numeros.add(2);
 numeros.add("2");

 console.log(numeros);
 console.log( "==================");

 /**
 * Pregunta 5:
 * ¿Qué función podemos utilizar para comprobar si existe un valor dentro de un SET?
 * Suponiendo que tenemos el siguiente código:
 * R//persona.has("Pedro");
 */

  let personas1 = new Set(["Fernando","Maria","Pedro"]); 

  /**
 * Pregunta 6:
 * ¿Qué sucede con este código?
 * R//Se crea un set con los valores de: "f","e","r","n","a","n","d","o" y "o";
 * => Un STRING, es un arreglo de caracteres, al mandarlo al constructor de un set, 
 * lo descompone y excluye los duplicados.
 */

   let personas2 = new Set("fernando");
   console.log( personas2 );

   console.log( "==================");
   
/**
 * Pregunta 7:
 * ¿Qué sucede con el siguiente código?
 * R//Se borran todos los registros del set => El parametro adicional que enviamos en el CLEAR, 
 * es ignorado por el interprete.
 */

     let personas3 = new Set(["fernando","Maria"]);
 
     personas3.clear(1);
      
     console.log( personas3  );

     console.log( "==================");

/**
 * Pregunta 8:
 * ¿Qué sucede con el siguiente código?
 * R//No se borra nada => No se borra nada, ya que no existe dentro del set, un valor "1",
 * a "Fernando", sería personas.delete("fernando");
 */

       let personas4 = new Set(["fernando","maria"]);
 
       personas4.delete(1);
        
       console.log( personas4);
       

/**
 * Pregunta 9:
 * ¿Podemos agregar SETS dentro de un Set?
 * R//Verdadero
 */

/**
 * Pregunta 10:
 * ¿El siguiente código sería valido para inicializar un set?
 * R//Verdadero  => Esto sería un set de arreglos. Totalmente válido.
 */

 let personas5 = new Set([["nombre","fernando"],["nombre","maria"]]); 