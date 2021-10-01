/**
 * Sumario de modos de herencia en JavaScript
 * - Herencias por medio del contructor
 * - Herencia por medio de objetos
 * - usar propiedades
 * - copiar prototipos
 * - ambos
 * - Prototype chainig (pseudo-classical)
 * - Inherito only the prototype.
 * - Temporary constructor.
 * - Copying the prototype prototies.
 * - copy all properties (shallow copy)
 * - Deep copy
 * - Prototypepal inheritance
 * - Extend and augment
 * - Multiple inherritance
 * - Borrowing constructors
 * - Borrow a constructor and copy the prototipe
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

function Mamifero(){};
//
//Copiamos el prototipo
//
let F = function(){};
F.prototype = Animal.prototype;
Mamifero.prototype = new F();
//
Mamifero.prototype.nombre = "Mamífero";
// 

function Gato(color, genero){
    this.color = color;
    this.genero = genero;
}

//Herencia
let OtherF = function(){};
F.prototype = Mamifero.prototype;
Gato.prototype = new OtherF();
//

//Modificamos el prototipo
Gato.prototype.nombre = "Gato";
Gato.prototype.saludar = function(){
    // "Hola, soy un "+this.nombre+" de color "+this.color+" y soy "+this.genero;
    return `Hola, soy un ${this.nombre} de color ${this.color} y soy ${this.genero}`
}

//Instancia
let benito = new Gato("miel", "angoro");
// benito.nombre = "benito";
enumera(benito);

//Creamos un animal
let animal = new Animal();
enumera(animal);

//Creamos una instancia para mamífero
let mamifero = new Mamifero();
enumera(mamifero);

