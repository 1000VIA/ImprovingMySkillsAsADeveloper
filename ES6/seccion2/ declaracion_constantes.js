/**
 * Declaración de constantes
 */
//Siempre tienen que inicializarse en el momento en que son definidas.
const PERSONA = {
    nombre:"Milvia",
    apellido:"Alvarez"
};
//Esto es permitido en ES6
PERSONA.nombre = "Other"

//Esto no se puede hacer porque se le está cambiando todo el contenido a la constante.
// PERSONA = {
//     nombre:"Dayana",
//     apellido:"Hinestroza"
// };

console.log(PERSONA);











