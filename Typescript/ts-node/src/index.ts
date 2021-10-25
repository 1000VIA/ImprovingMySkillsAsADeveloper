import { Pokemon } from "./decorators/pokemon";

const charmander = new Pokemon('charmander');

// (Pokemon.prototype as any ).custonName = 'pokachu'

// console.log(charmander.savePkemonToDB(50));

// charmander.savePkemonToDB(3)

charmander.publiApi = 'https://fernando-herrera.com';

console.log( charmander )