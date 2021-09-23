
/**
 *  Funciones de Flecha y Arreglos
 */

 let arreglo1 = [5, 10, 11, 2, 1, 9, 20];

 let arreglo = [50, 120, 113, 122, 31, 59, 320];

//ES6

let ordenadoES6 = arreglo.sort((a,b)=> a - b);

console.log(ordenadoES6,'probando ES6');

//ES5

var oredenadoES5 = arreglo1.sort(function(a,b){
    return a-b;
})
console.log(oredenadoES5,'probando ES5');