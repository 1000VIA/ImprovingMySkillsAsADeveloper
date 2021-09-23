
/**
 *   Nuevo método: Object.assign()
 */

//ES5

function mezclar (objReceptor, objDOnador){
    Object.keys(objDOnador).forEach(function(key){
        objReceptor[key] = objDOnador[key];
    });
    return objReceptor;
}

var objReceptor = {}
var objDOnador = {
    // nombre: "mi-nombre.js",
    get nombre(){
        return "mi-nombre.js";
    }
}
console.log(objDOnador.nombre);
console.log(objDOnador);
// console.log(mezclar(objReceptor, objDOnador));

//ES6

console.log(Object.assign(objReceptor, objDOnador));


