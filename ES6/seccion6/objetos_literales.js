
/**
 *  Extensiones de objetos literales
 * Los objetos eb ES6
 * Objetos Literales en ES6
 */

//ES5 
var objeto = {
    nombre: "Milvia"
}
function crearPersona(nombre, apellido, edad){
    return{
        nombre:nombre,
        apellido:apellido,
        edad:edad
    }
}


//ES6

function crearPersona(nombre, apellido, edad){
    return{
        nombre,
        apellido,
        edad
    }
}
let milvia = crearPersona('Milvia', 'Alvarez', 32)

console.log(milvia);