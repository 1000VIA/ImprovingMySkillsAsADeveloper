
/**
 *  Diferencias entre el "Spread" y el "Rest"
 * Rest: Junta los elementos en un arreglo
 * Spread: Esparce los elementos como si fueran enviados de forma separada.
 */


//Los parámetros REST, se pueden entender como el resto de los parámetros enviados a una función
const saludarRest = (saludo, ...nombres)=>{
    for(i in nombres){
        console.log(`${saludo} ${nombres[i]}`);
    }
};

const saludarSpread = (saludo, ...nombres)=>{
    console.log(`${saludo} ${nombres}`);
};

saludarRest("Hola", "Milvia", "Dayana", "Pily");

let personas = ["Licho", "Rosa", "Nana"]
saludarSpread("Que tal!", personas);

let partes = ["brazos", "piernas"];

let cuerpo = ["cabeza", "cuello", ...partes, "pies", "dedos"];

console.log(cuerpo);
