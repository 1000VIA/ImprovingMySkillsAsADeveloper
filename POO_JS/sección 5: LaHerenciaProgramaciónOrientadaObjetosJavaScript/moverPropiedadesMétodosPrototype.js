/**
 *  Mover las propiedades y métodos al prototype
 * Podemos "mover" las propiedades a "prototype" para 
 * que sea común a todas las instancias.
 * Pero se puede sobreescribir la propiedad desde la
 * instancia.
 * Los métodos son mejores candidatos para ser almacenados en 
 * prototype pues casi nunca se modifican.
 */

function enumera(objeto){
    for(let prop in objeto){
        document.write((objeto.hasOwnProperty(prop))? "own" : "prototype");
        document.write(`: ${prop} = ${objeto[prop]}`);
        document.write('<br> ');
    }
    document.write('<br> ');
}

function Animal(){}
Animal.prototype.nombre = "Animal";
Animal.prototype.toString = function(){
    return this.nombre;
}
//

function Mamifero(){}
Mamifero.prototype.nombre = "Mamífero";
// 

function Gato(color, genero){
    this.color = color;
    this.genero = genero;
}

//Herencia
Mamifero.prototype = new Animal();
Gato.prototype = new Mamifero();

//Modificamos el prototipo
Gato.prototype.nombre = "Gato";
Gato.prototype.saludar = function(){
    // "Hola, soy un "+this.nombre+" de color "+this.color+" y soy "+this.genero;
    return `Hola, soy un ${this.nombre} de color ${this.color} y soy ${this.genero}`
}

//Instancia

let benito = new Gato("miel", "angoro");
benito.nombre = "benito"
enumera(benito);
let cucho = new Gato("rosa", "Macho");
enumera(cucho);
