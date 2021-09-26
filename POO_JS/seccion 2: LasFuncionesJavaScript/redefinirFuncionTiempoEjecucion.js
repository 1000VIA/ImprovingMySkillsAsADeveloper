/**
 * Redefinir una función en tiempo de ejecución.
 * Ya que una función puede regresar otra función, 
 * podemos utilizar la segunda función para redefinirla
 * a la primera.
 */

function a(){
    alert ('Hola ');
    return function(){
        alert('Adios')
    };

};
//Redefinimos la función 
a = a();
a();
a();
