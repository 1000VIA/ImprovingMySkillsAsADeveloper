
/**
 * Valores por defecto en la destructuración
 */

// let  frutas = ["banano", "Pera"];

// let [fruta1, fruta2 = "uva"] = frutas;

// console.log(fruta1);
// console.log(fruta2);

let opciones = {
    nombre:"Milvia"
};

let {nombre, apellido = "Alvarez"} = opciones;
console.log(nombre, apellido);