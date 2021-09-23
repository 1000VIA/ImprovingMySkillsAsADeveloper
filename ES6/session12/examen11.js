/**
 * Examen #11
 */

/**
 * Pregunta 1:
 * Para usar propiedades dentro de la clase, ¿Cómo hacemos referencia a dichas propiedades?
 * R// this
 */

/**
 * Pregunta 2:
 * ¿Qué son métodos estáticos?
 * R// Son métodos que se pueden ejecutar sólo con hacer referencia a la clase directamente
 */

/**
 * Pregunta 3:
 * ¿Qué código es necesario para ejecutar el método estático del siguiente ejemplo?
 * R// Figura.imprime();
 */
 class Figura{
    static imprime(){
    console.log("==============");
    console.log("=            =");
    console.log("=  Cuadrado  =");
    console.log("=            =");
    console.log("==============");
    }
   }
   Figura.imprime();

 /**
 * Pregunta 4:
 * ¿El siguiente código es válido?
 * R// Verdadero
 */

  let metodo = "imprime";
 
  class Figura1{
   
   static [metodo](){
   console.log("==============");
   console.log("=            =");
   console.log("=  Cuadrado1  =");
   console.log("=            =");
   console.log("==============");
   }
   
  }
  Figura1.imprime();

  /**
 * Pregunta 5:
 * ¿La herencia es transferir metodos y propiedades a una clase hijo?
 * R// Verdadero
 */


/**
 * Pregunta 6:
 * Desde una clase extendida de otra... ¿Cómo llamamos al constructor del padre?
 * R// super();
 */


/**
 * Pregunta 7:
 * La clase extendida de otra clase... también sería una instancia de la clase padre?
 * R// Verdadero 
 */

/**
 * Pregunta 8:
 * ¿Es posible sobre escribir el constructor del padre desde una clase heredada?
 * R// False
 */
 
/**
 * Pregunta 9:
 * Si en una clase heredada o extendida de otra, creamos un método con el mismo nombre de la clase padre, ¿Qué sucede?
 * R// En laclase hija, cuando se haga referencia al método, llamará a la clase hija y no a la clase del padre.
 */


/**
 * Pregunta 10:
 * Dado el siguiente código, ¿Cuál es la respuesta correcta?
 * R// Error de sintaxis, porque la función "super" no es esperada ahí.
 */
 class Figura2{
    constructor(lado){
        this.lado = lado;
    }
    
     obtenerVentana(){
      return super();
     }
   }
    
   let figura = new Figura2();
    
   console.log( figura.obtenerVentana() );