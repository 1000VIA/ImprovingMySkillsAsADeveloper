/**
 * VAR vs LET
 */

//la declaración de variable let: permite definir el ciclo de vida que va a tener la variable.
let mensaje = "123" 

if (1 === 2) {
    mensaje = "Hola mundo";
}

console.log(mensaje);