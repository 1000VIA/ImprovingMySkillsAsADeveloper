/**
 * Añadir propiedades a prototype
 * Cuanondo creas una función como constructora 
 * por medio de "new", puedes hacer referencia al mismo
 * por medio de "this" (la cual no es una variable).
 * A las propiedades añadimos con "this" 
 * se les conoce como "own properties".
 * A las propiedades añadidas con "prototype" se les 
 * conoce como "prototype properties".
 */

function Libro(titulo, nombre, apellido, paginas){
    this.titulo = titulo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.paginas = paginas;
    this.info = function(){
        let cadena = this.titulo+", "+this.paginas+" pag.,"+this.nombre+" "+this.apellido;
        return cadena;
    }
}
/**
 * Usamos la función constructora
 */ 
// Libro.prototype.precio = 2000;
// Libro.prototype.calificacion = 5;
// Libro.prototype.rating = function(){ //usamos una función anónima
//     return "Calificación: "+this.calificacion+" estrellas";
// };

// Modificaremos todo el prototype como un objeto
Libro.prototype = {
    precio: 2000,
    calificacion:5,
    rating:function(){
            return "Calificación: "+this.calificacion+" estrellas";
        }
};

// Creamos 2 Libros
let libro1 = new Libro("El Quijote de la Mancha", "Miguel", "de Cervantes", 600);
let libro2 = new Libro("Cien años de soledad", "Gabriel", "Garcíama", 800);

document.write(libro1.rating())
document.write('<br> ',libro2.rating())


