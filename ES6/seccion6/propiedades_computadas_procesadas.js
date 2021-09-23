
/**
 *  Nombres de propiedades computadas o procesadas
 */

//ES5
var persona = {}

var apellido = "apellido"

persona["primer Nombre"] = "Milvia";
persona[apellido] = "Alvarez";

// console.log(persona["Primer Nombre"]); 
// console.log(persona[apellido]);

// let persona = {
//     "primer nombre": "Milvia"
// }

// console.log(persona["primer nombre"]);


//ES6
let apellido1 = "primer apellido"

let persona1 ={
    "primer nombre": "Milvia",
    [apellido1]: "Alvarez"
};

console.log( persona1["primer nombre"]);
console.log(persona1[apellido1]);

let subFijo = " nombre";

let persona2 = {
    ["primer" + subFijo] : "Pily",
    ["segundo" + subFijo] : "Dayana"
}

console.log( persona2["primer nombre"]);
console.log(persona2["segundo" + subFijo]);
