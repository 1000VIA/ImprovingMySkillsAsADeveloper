
/**
 *  Arrow Functions - Funciones de Flecha ( => )
 * 1. Función con argumentos
 * 2. Seguido de una flecha gorda =>
 * 3. Seguido del cuerpo de la función
 * 
 * Para que sirve?
 * 1. Menos código que es más simple de interpretar.
 * 2. No hay un nuevo "this" dentro de las funciones.
 * 3. No hay contructores, no tiene new.
 * 4. No puedes cambiar el valor del "this" aunque uses call(),applay() o bind().
 * 5. No hay objeto "arguments".
 * 6. Entre otras cosas.
 * 
 * Características principales.
 * 1. No hay creación de this, super, arguments y new.target. (Son objetos)
 * 2. No pueden ser llamadas con NEW.
 * 3. No h ay un prototipo => prototype
 * 4. No pueden cambiar el valor del "THIS"
 * 5. No hay objeto => "arguments"
 * 6. No puede tener nombre del parámetros duplicados.
 */

//Ejemplos de funciones de flecha

//ES5
var miFuncion2 = function(valor){
    return valor;
};

var sumar2 = function(num1, num2){
    return num1 +num2;
};

var saludar2 = function(){
    return "Hola Mundo";
};

var saludarPersona2 = function(nombre){
    var salida = "Hola, " + nombre
    return salida
}

var obtenerLibro2 = function(id){
    return{
        id: id,
        nombre: "El rastro de tu sangre en la nieve"
    }
}

console.log(miFuncion2("nuevo"));
console.log(sumar2(100,30));
console.log(saludar2());
console.log(saludarPersona2("Juan"));
console.log(obtenerLibro2(1));



//ES6
let miFunción1 = valor => valor;

let sumar1 = (num1, num2) => num1 + num2;

let saludar1 = () => "Hola Mundo corto"

let saludarPersona1 = (nombre) => {
    let salida = `Hola,   ${nombre}`;
    return salida;
}

let obtenerLibro1 = (id) => ({
        id: id,
        nombre: "Cien años de  soledad"
});

console.log(miFunción1("nuevo1"));
console.log(sumar1(50,30));
console.log(saludar1());
console.log(saludarPersona1("Milvia"));
console.log(obtenerLibro1(5));