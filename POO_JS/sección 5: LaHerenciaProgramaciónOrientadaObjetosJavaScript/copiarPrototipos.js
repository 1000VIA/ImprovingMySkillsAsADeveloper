/**
 *  Herencia: copiar sólo los prototipos
 * Los elementos que se comparten se almacenan en el prototipo.
 * Por esta razón, muchas veces sólo se hereda el prototype, 
 * que es donde se debe almacenar los elementos reutilizables.
 * Lo cual es más eficiente, pero las modificaciones 
 * son més complicadas, ya que modifican a todas las instancias
 * de toda la cadena de herencia.
 */

function enumera(objeto){
    for(let prop in objeto){
        document.write((objeto.hasOwnProperty(prop))? "own" : "prototype");
        document.write(`: ${prop} = ${objeto[prop]}`);
        document.write('<br> ');
    }
    document.write('<br> ');
}

//creamos el objeto de la clase principal
function Animal(){}
//creamos su prototipo
Animal.prototype.nombre = "Animal";
Animal.prototype.toString = function(){
    return this.nombre;
}
//

function Mamifero(){}
//
//Copiamos el prototipo
//
Mamifero.prototype = Animal.prototype;
//
Mamifero.prototype.nombre = "Mamífero";
// 

function Gato(color, genero){
    this.color = color;
    this.genero = genero;
}

//Herencia
Gato.prototype = Mamifero.prototype;

//Modificamos el prototipo
Gato.prototype.nombre = "Gato";
Gato.prototype.saludar = function(){
    // "Hola, soy un "+this.nombre+" de color "+this.color+" y soy "+this.genero;
    return `Hola, soy un ${this.nombre} de color ${this.color} y soy ${this.genero}`
}

//Instancia

let benito = new Gato("miel", "angoro");
benito.nombre = "benito";
enumera(benito);

//Creamos un animal
let animal = new Animal();
animal.nombre = "La bestia"
enumera(animal);

