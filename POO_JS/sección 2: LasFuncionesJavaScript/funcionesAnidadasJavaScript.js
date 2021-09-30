/**
 * Funciones anidadas en JavaScript
 * Se puede crear una función dentro de otra función, 
 * pero solo será visible dentro de 
 */

function a(numero){
    function b(entrada){
        return entrada * 5;
    };
    return 'Resultado ' + b(numero)
};
alert(a(10))