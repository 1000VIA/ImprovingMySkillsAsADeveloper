
/**
 *  Repeticiones de strings - Repeat
 */


let texto = "Hola";

//repeat: regresa un string
console.log( texto.repeat(2));
console.log( "0".repeat(2));

const ESPACIOS = 12;

let nombres = ["Milvia", "Henry", "Dayana"];
let telefonos = ["3508676941", "3167560606", "3157482356"];

for(i in nombres){
    let dif = ESPACIOS - nombres[i].length;
    console.log( nombres[i] + " ".repeat(dif) + "|" + telefonos[i]);
}