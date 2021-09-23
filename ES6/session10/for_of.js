/**
 * Nuevo ciclo - FOR-OF
 */

//Para hacerlo con un Map()

let personas2 = new Map( [ ["nombre", "Milvia"], ["apellido", "Alvarez"] ] );

for(let persona2 of personas2){
    console.log(persona2);
}

console.log( "==================");
//Para hacerlo con un set()
let personas1 = new Set();

personas1.add( {nombre:"Milvia", edad:31} );
personas1.add( {nombre:"Pily", edad:28}, );
personas1.add( {nombre:"Dayana", edad:17} );

for(persona1 of personas1){
    console.log(persona1.nombre, persona1.edad);
}

console.log( "==================");
//Para hacerlo con un FOR-OF
let personas = [
    {nombre:"Milvia", edad:31},
    {nombre:"Pily", edad:28},
    {nombre:"Dayana", edad:17},
    {nombre:"Juan", edad:20},
    {nombre:"Nana", edad:30},

]

for(persona of personas){
    console.log(persona.nombre, persona.edad);
}

console.log( "==================");
let numeros = [100, 20, 30, 50, 200];

for(let numero of numeros){
    console.log(numero);
}

console.log( "==================");
//Para hacerlo con un FOR-IN
for(let i in numeros){
    console.log(numeros[i]);
}

console.log( "==================");
//Para hacerlo con el for de toda la vida
for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}