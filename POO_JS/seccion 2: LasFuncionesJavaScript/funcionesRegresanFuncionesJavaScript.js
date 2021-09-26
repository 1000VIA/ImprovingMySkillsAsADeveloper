/**
 * Funciones que regresan funciones en JavaScript
 * Dentro de la sentencia return puedes ejecutar una función anónima.
 * Si una función no tiene una sentencia 
 * "return", regresa un valor "udefined".
 */

function a(){
    alert('Hola ');
    return function(){
        alert('canola')
    };
};
// a();

// a()();

//creamos un nuevo objeto, creamos una instancia.
let funcion = new a();
funcion();
