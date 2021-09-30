/**
 * Funciones que se autoinvocan en JavaScript
 * Por medio de los parentesis, podemos autoinvocar a una función,
 * generalmente es una función anónima.
 * Podemos pasarle parámetros por medio de paréntesis.
 */

(
    function(nombre){
        alert(`Hola ${nombre} estoy probando mi función que se auto invoca`)
        // alert(' Hola ' + nombre + ' estoy probando mi función que se auto invoca');
    }
)("Juanito");