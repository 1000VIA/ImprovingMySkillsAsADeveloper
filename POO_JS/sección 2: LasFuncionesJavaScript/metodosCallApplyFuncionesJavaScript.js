/**
 * Los métodos call y apply de las funciones en JavaScript
 * call y apply
 * Ambas funciones sirven para llamar a otra función.
 * En ambas, el primer parámetro debe ser el objeto propietario.
 * En el método call, los parámetros se pasan separados por comas.
 * El método aplay, los parámetros se pasan como un arreglo.
 */

function producto(a, b){
    return a * b;
}

var objeto = producto.call(objeto, 7, 2);
alert('Estamos usando el Call para la función producto ' + objeto);

var objeto1 = producto.apply(objeto, [7, 2]);
alert(('Estamos usando el Aplay para la función producto ' + objeto1));