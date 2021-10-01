/**
 * El contructor temporal F() 
 * Heredar en JavaScript por medio de un constructor temporal
 * Una forma de solucionar el problema anterior 
 * es crear un constructor temporal.
 * Con el constructor temporal se rompe la cadena de prototipos,
 * pero se heredan los elementos entre las clases.
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

