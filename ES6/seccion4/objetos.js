
/**
 * Romper la relación de referencia de los objetos
 */

let persona1 = {
    nombre:'Milvia',
    edad: 32
};

let persona2 = {...persona1};

persona2 = {
    nombre:"Dayana",
    edad: 17,
    direccion: "Cl 48A #68B-04",
    conduce: true,
    vehiculo:true,
    vegetariana: false,
    casada: false
};

//Añadir propiedades a objetos a partir de otros objetos

persona1 = {
    ...persona2,
    ...persona1
}


console.log(persona1);
console.log(persona2);
