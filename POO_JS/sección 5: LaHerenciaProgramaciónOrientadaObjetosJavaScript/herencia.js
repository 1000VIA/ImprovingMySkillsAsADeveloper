/**
 * ¿Qué es la herencia en Programación orientada a objetos?
 * un objeto puede acceder a propiedades y métodos de las
 * clases que se encuentran "arriba" dentro de la cadena de 
 * herencia.
 * Por razones de eficiencia debemos almacenar los métodos
 * y propiedades compartidas en el objeto prototype.
 * La forma tradicional de hacer herencia en JS es 
 * por medio del prototype.
 * - claseHija.prototype = new claseMadre();
 */


function Animal(){
    this.nombre = "Animal";
    this.toString = function(){
        return this.nombre;
    }
}

function Mamifero(){
    this.nombre = "Mamífero";
}
function Gato(color, genero){
    this.nombre = "Gato";
    this.color = color;
    this.genero = genero;
    this.saludar = function(){
        // "Hola, soy un "+this.nombre+" de color "+this.color+" y soy "+this.genero;
        return `Hola, soy un ${this.nombre} de color ${this.color} y soy ${this.genero}`
    }
}

//Herencia
Mamifero.prototype = new Animal();
Gato.prototype = new Mamifero();

//Instancia

let benito = new Gato("miel", "angoro");
document.write(benito.saludar()); //Estamos llamando a un método que está dentro de la clase
document.write('<br> ', benito.toString());