
/**
 *  Convertir un Set en Array
 */

//Simplificando todo el código

console.log( "============Forma corta==================" );

let numeros  = [1,2,3,4,5,6,7,7,7,7,7,7,3,1,8,9];//Crea el array

const eliminaDuplicados = ( items ) => { //tiene los itms 

    return [... new Set(items)];//Regresa el set usando el operador spred
}
let arrayNumeros = eliminaDuplicados( numeros);

console.log( arrayNumeros );


console.log( "============Forma larga==================" );

let numeros1  = [1,2,3,4,5,6,7,7,7,7,7,7,3,1,8,9];//Crea el array

let setNumeros = new Set(numeros)// Lo convierte en un set

console.log(setNumeros);// Lo muestro por consola como un set

//Me devuelve le array limpio
// let arrayNumeros1 = [...setNumeros];//Convierto ese set de numeros otra vez al arreglo de números.


const eliminaDuplicados1 = ( items ) => { //tiene los itms 
    let set = new Set( items ); // crea el set
    return [...set];//Regresa el set usando el operador spred
}

let arrayNumeros1 = eliminaDuplicados1( numeros1);

console.log( arrayNumeros1 );



