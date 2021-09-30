/**
 *  Acceder a las propiedades y métodos del prototipo
 * Usar propiedades y métodos del prototipo
 * 1. Como el prototypo es un objeto, cualquier modificación
 * se puede visualizar todas las instancias, incluso si fueron
 * creadas antes de la modificación al prototipo.
 * 2. Todo lo que se encuentra eb el prototipo se pasa
 * "por referencia", por lo tanto, no se duplica en cada instancia.
 * En cambio en las "own properties" si se duplica en cada instancia.
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

// prototype: Modificaremos todo el prototype como un objeto
Libro.prototype = {
    precio: 2000,
    calificacion:5,
    rating:function(){
            return "Calificación: "+this.calificacion+" estrellas";
        }
};

// Creamos 2 Libros, o creamos las instancias
let libro1 = new Libro("El Quijote de la Mancha", "Miguel", "de Cervantes", 600);
let libro2 = new Libro("Cien años de soledad", "Gabriel", "Garcíama", 800);

// Usamos el prototype modificado
document.write(libro1.rating())
document.write('<br> ',libro2.rating())

// Modificamos el prototype de nuevo
Libro.prototype.get = function(parametro){
    document.write('<br> ', this[parametro]);
}
// Usamos el prototype modificado, siempre se debe definir antes de usarlo.
libro1.get("titulo")
libro2.get("titulo")

