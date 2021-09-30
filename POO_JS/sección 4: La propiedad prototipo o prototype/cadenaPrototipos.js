/**
 * Cadena de prototipos: propiedades de función vs. propiedades de prototipo
 * JS primero busca en la función la propiedad, y 
 * si no existe la busca en el objeto prototype.
 * Si hay una propiedad de la función y una propiedad en 
 * el objeto prototype, la propiedad de la función tiene 
 * precedencia.
 * Si eliminas la propiedad de la función (own properties), 
 * aparecerá la propiedad prototype.
 * A esto se le conoce como "cadena de prototipos" 
 * o "property chain"
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

// Desplegar las propiedades
document.write(libro1.precio)

//m¡Modificamos los precios.
libro1.precio = 3000;
libro2.precio = 5000;

//Leemos los precios.
document.write('<br> El libro 1 cuesta: ',libro1.precio)
document.write('<br> El libro 2 cuesta: ',libro2.precio)

//Tiene precedencia las propiedades de la función => ver la función linea 19.
document.write('<br> La calificación es: ',libro1.calificacion);
document.write('<br> La calificación es: ',libro2.calificacion);

//Cadena de prototipos
document.write('<br> La calificación es: ',libro1.toString());
