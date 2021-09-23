
/**
 *  Aclarando el doble comportamiento de las funciones
 * CON NEW: El valor de "THIS" desntro de la función es un nuevo objeto y ese  nuevo objeto es retornado.
 * SIN NEW; Simplemente hacemos el llamado de la función y esperamos el retorno de algún valor procesado que 
 * puede ser un objeto, undefined o null.
 * NEW.TARGET => meta propiedad: es una propiedad de un no-objeto, que provee información adicional relacionada con su procedencia (como el new).
 * Cuando el constructor de la función es llamada, new.targer se llena con el operador new.
 * Si la función "Call" es ejecutada, "new.target" no estará definida ya que no se ejecutó el constructor.
 */

function Persona(nombre){

    //ES5
    // if(this instanceof Persona){
    //     this.nombre = nombre;
    // }else{
    //     throw new Error('Esta función, debe de ser utilizada con el new')
    // };

    //ES6
    //new.target no asegura que nuestros objetos sean declarados con el objeto new cuando lo necesitamos, es más seguro que nstanceof
    
    if (typeof new.target !== "undefined") {
        this.nombre = nombre;
    }else{
            throw new Error('Esta función, debe de ser utilizada con el new')
        };

    this.nombre = nombre;
}

var persona = new Persona("Milvia");

var noPersona = Persona.call(persona, "Milvia");//undefined
