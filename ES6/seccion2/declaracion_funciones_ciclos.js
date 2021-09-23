/*
 * Declaración de funciones en ciclos
 */

//Declaramos un arreglo llamado funciones
var funciones = []; 

//Llenaremos el arreglo con una función básica de imprimir por consola.
//Al usar var i es compartida por todas las funciones.

for(let i = 0; i < 10; i++){
    //Empujar un elemento al arreglo y metemos una función

    funciones.push(()=>{console.log(i)});
    // ES5, esto se debe hacer cuando la declaración de variable es de tipo var
    // funciones.push(
    //     ((valor)=>{
    //         return ()=> {console.log(valor)};
    //     })(i)
    // )
}
//Llamamos la funciones
//forEach => Recorre los elementos de una coleción
funciones.forEach((func)=>{
    func();
});










