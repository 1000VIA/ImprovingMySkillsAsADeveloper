/**
 * Sobreescribir una propiedad prototipo
 * Sobreescribir propiedades e la función.
 * Para que sepamos si la propiedad es de la función
 * o del prototipo, tenemos el método hasOwnProperty().
 * Si borramos una propiedad de la función, javascript nos regresará 
 * la propiedad del prototipo.
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
document.write('<br> El libro 1 cuesta: ',libro1.precio);
document.write('<br> Existe en la función? => ',libro1.hasOwnProperty("precio"));
document.write('<br> La calificación es: ',libro1.calificacion);
document.write('<br> Existe en la función? => ',libro1.hasOwnProperty("calificacion"));

//Eliminamos 
delete libro1.calificacion;

//Desplegamos
document.write('<br> La calificación es: ',libro1.calificacion);

//Preguntamos
document.write('<br> Existe en la función? => ',libro1.hasOwnProperty("calificacion"));