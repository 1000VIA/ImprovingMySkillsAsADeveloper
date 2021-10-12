"use strict";
//Función con nombre o nombrada
exports.__esModule = true;
function funcion1(x, y) {
    return x + y;
}
//Función anónima
var funcion2 = function (x, y) {
    return x + y;
};
//arrow function
var funcion3 = function (x, y) { return x + y; };
console.log(funcion1(6, 5));
console.log(funcion2(9, 2));
console.log(funcion3(8, 3));
exports["default"] = {};
