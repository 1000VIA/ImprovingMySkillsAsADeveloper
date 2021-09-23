/**
 * forEach() De los mapas
 */


let mapa = new Map( [ ["nombre", "Milvia"], ["Edad", 32] ] )

mapa.forEach( (valor, llave) => console.log(`Llave: ${llave}, valor: ${valor}`))

console.log( "==================");

mapa.forEach( (valor, llave, mapaOrigen)=> {
    console.log(`Llave: ${llave}, valor: ${valor}`);
    console.log(mapaOrigen)
})