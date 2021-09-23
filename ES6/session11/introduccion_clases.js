/**
 * Introducción a las clases
 */

//ES5

//Se asumía que si el nombre de la función iniciaba con mayúscula ya era una clase.
function Persona(nombre){
    this.nombre = nombre;
    this.gritarNombre = function(){
        console.log( this.nombre.toUpperCase() );
    }
}

Persona.prototype.decirNombre = function(){
    console.log( this.nombre );
}


let milvia = new Persona("Milvia");//ersona {nombre: 'Milvia'}
// let milvia =  Persona("Milvia"); //undefined

console.log( milvia );

milvia.decirNombre();
milvia.gritarNombre();

/**
 * Retorna true solo si al momento de crear la variable se le agrega la palabra reservada new,
 *  de lo contrario regresa un false.
 */

console.log( milvia instanceof Persona );
console.log( milvia instanceof Object );