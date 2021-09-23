/**
 * Examen #4
 */

/**
 * Pregunta 1:
 * Las funciones de flecha, pueden cambiar el valor del objeto THIS cuando son definidas?
 * R// False => Es una característica principal, las funciones de flecha no cambian el this.
 */


/**
 * Pregunta 2:
 * Las funciones de flecha tienen constructores?
 * R// Falso => No tienen constructores.
 */

/**
 * Pregunta 3:
 * El objeto arguments en las funciones de flecha, se utiliza igual que las funciones normales?
 * R// False => No tienen objeto arguments.
 */


 /**
 * Pregunta 4:
 * Explique que sucede aquí:
 * R// Imprime por consola "Fernando - 31" sin problemas, ya que se utiliza un función de
 * flecha que recibe arguments como argumento.
 */

  function parametros(){
 
    let nombres = ((arguments)=>{
                        return `${arguments[0]} - ${arguments[1]}`;
                   })(arguments)
    console.log(nombres);
    
   }
   parametros("Fernando",31);


  /**
 * Pregunta 5:
 * Estas funciones retornan exactamente el mismo valor?
 * R// Verdadero => Su construcción es diferente, pero la salida es exactamente la misma.
 */
   var saludo1 = function(nombre){
    return "Hola " + nombre;
    }
    
    let saludo2 = nombre =>`Hola ${nombre}`;
    
    
    console.log(saludo1("Juan"));
    console.log(saludo2("Juan"));


/**
 * Pregunta 6:
 * Esta sintaxis es válida en el ES6?
 * R// Verdadero =>  Es una función de flecha anónima que no recibe parámetros 
 * y no retorna nada. (Sólo sirve para hacerte pensar un poco)
 */


/**
 * Pregunta 7:
 * Podemos decir, que podemos desechar las funciones típicas del ES5 y solo utilizar funciones de flecha?
 * R// False => Definitivamente no, las funciones tradicionales no sólo trabajan como funciones, sino que 
 * permiten la creación de objetos y otros mecanismos totalmente útiles hoy en día. Las funciones de 
 * Flecha expanden el JavaScript y nos dan utilidades nuevas, pero no reemplazan a las funciones tradicionales.
 */

/**
 * Pregunta 8:
 * Las funciones de flecha pueden ser anónimas?
 * R// Verdadero
 */

/**
 * Pregunta 9:
 * typeOf de una función de flecha, que retorna?
 * R// Funcion
 */

/**
 * Pregunta 10:
 * Es totalmente válido en ES6?
 * let restar = (a,b)=>a-b;
 * var restas = new restar(1,2);
 * R// Falso
 */