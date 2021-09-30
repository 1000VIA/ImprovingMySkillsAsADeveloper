/**
 * ¿Que es un objeto?
 * EN JS "casi" todo es un objeto.
 * Lo valores primitivos son: cadenas, números y booleans.
 * Todos los demás son objetos: arreglos, funciones,
 * expresiones regulares y objetos.
 * Los objets son variables que contienen otras variable, 
 * incluso arreglos, funciones u otros objetos.
 * Existen tres maneras de crear un objeto:
 * - Por medio de las llaves.
 * - Por un constructor.
 * - Por la palabra reservada "new"
 */

//Por medio de una variable - literal
let alumno = {
    nombre: "Dayana",
    apellido: "Alvarez"
};

//Por medio de una función - constructor
function Profesor(nombre, apellido, edad){
    nombre.nombre = nombre;
    apellido.apellido = apellido;
    edad.edad = edad;
};

var profesorMatematicas = new Profesor("Milvia", "Alvarez", 32);

console.log(profesorMatematicas);

//new ES5
var director = new Object();
director.nombre = "Henry";
director.apellido = "Hinestroza";
director.edad = 40;

document.write(JSON.stringify(director))