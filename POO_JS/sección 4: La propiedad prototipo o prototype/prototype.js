/**
 * ¿Qué es la propiedad prototype?
 * Las funciones son objetos que tienen 
 * propiedades (arguments, prototype y constructor)
 * y métodos(call() y apply())
 * Prototype: Es una propiedad que tiene todas función 
 * y es de tipo objeto. En un inicio es un objeto vacío.
 * Por medio de la propiedad prototype podemos añadir métodos y propiedades
 * a la función de clase o constructor.
 * El prototipo solo se utiliza cuando utilizas a la función 
 * constructora.
 */

function producto(num1, num2, num3){
    return num1 * num2 * num3;
}

document.write(producto(10, 5, 8));
document.write('<br> ', producto.length);
document.write('<br> ', producto.constructor);
document.write('<br> ', typeof producto.prototype);
producto.prototype = {};
