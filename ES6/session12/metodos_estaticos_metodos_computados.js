/**
 * Miembros estáticos y métodos computados.
 * Miembros estáticos: Es un método que nos va a permitir ejecutar alguna función 
 * que está dentro de una clase sin instanciar la clase.
 * o sea no hay que inicializar una variable para poder llamar la función.
 * - Métodos computados: Son métodos cuyo nombre se puede definir atravez de una variable.
 * - Métodos estáticos: Son esos metodo que podemos llamar sin inicializar una clase.
 */

//Propiedades conmutadas
let nombreMetodo = "gritarNombre";

class Persona{

    constructor( nombre ){

        this.nombre = nombre;

    }
    
    decirNombre(){
        console.log(this.nombre);
    }

    //Llamamos la propiedad conmutada
    [ nombreMetodo ](){
        console.log(this.nombre.toUpperCase());
    }

    //Definiendo método estatic
    static crear( nombre ){
        return new Persona(nombre);
    }

}

let milvia = Persona.crear("Milvia");//La persona, o sea milvia se creeo basada en la clase Persona

console.log(milvia);//Persona {nombre: 'Milvia'}


//Los método estaticos solo funcionarán si se llaman desde fuera de la clase.
let dayana = milvia.crear("Dayana");
// let dayana = Persona.crear("Dayana");

console.log(dayana);