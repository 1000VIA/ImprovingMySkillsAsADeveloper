
/**
 *  Parametros REST - Parametros sin nombre
 */



 function agregar_familia(arr_familia, ...familia) {

    console.log(arguments);
 
    for(let i = 0; i < familia.length; i++){
        arr_familia.push(familia[i]);
    };

    return arr_familia;

};


let afamilia_arr = ["Milivia"];
let familia_arr2 = agregar_familia(afamilia_arr, "Pily", "Nana", "Licho");

console.log(familia_arr2);

/**
 * Restricciones del parámetro REST
 * 1. Sólo puede existir un parámetro REST en la función
 * 2. El parámetro res debe de ir siempre como último parámetro
 */

function juntar_nombres(apellidos, ...nombres){
    //cualquier cosa
}
