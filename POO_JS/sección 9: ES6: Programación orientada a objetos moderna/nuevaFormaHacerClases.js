/**
 * El nuevo comando class para hacer clases
 * Crear las instancias con ES6
 */

class Gato{}
class Perro{}

let benito = new Gato;
let cucho = new Gato();

document.write(typeof benito);
document.write("<br>", typeof cucho) ;

document.write("<br>", benito instanceof Gato);
document.write("<br>", cucho instanceof Perro );