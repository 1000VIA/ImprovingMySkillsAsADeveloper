/**
 * ¿Qué es la herencia en Programación orientada a objetos?
 */


function Libro(titulo, nombre, apellido, paginas){
    this.titulo = titulo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.paginas = paginas;
    this.calificacion = 10;
    this.info = function(){
        let cadena = this.titulo+", "+this.paginas+" pag.,"+this.nombre+" "+this.apellido;
        return cadena;
    }
}
/**
 * Usamos la función constructora
 */ 

// prototype: Modificaremos todo el prototype como un objeto
Libro.prototype = {
    precio: 2000,
    calificacion:5,

    rating:function(){
        return "Calificación: "+this.calificacion+" estrellas";
    },

    get:function(parametro){
        document.write('<br> ', this[parametro]);
    }
};

// Instancias
let libro1 = new Libro("El Quijote de la Mancha", "Miguel", "de Cervantes", 600);
let libro2 = new Libro("Cien años de soledad", "Gabriel", "Garcíama", 800);

for( let prop in libro1){
    if(!libro1.hasOwnProperty(prop))
    console.log(prop+" = "+libro1[prop]);
}


document.write(libro1.propertyIsEnumerable("precio"));//Retorna falso porque precio se encuentra en el prototipo y no en la función
document.write('<br> ',libro1.propertyIsEnumerable("calificacion")); // tru porque está en la función
document.write('<br> ',libro1.propertyIsEnumerable("constructor")); //false => contructor no es enumerable