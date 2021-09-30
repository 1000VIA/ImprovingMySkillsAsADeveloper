/**
 * El constructor
 * Podeos crear un objeto o instancia por medio del 
 * "Constructor" por medio del operador "new".
 * Por convención, la primera letra de un constructor o función de clase,
 * va en máyuscula.
 */

function Libro(titulo, nombre, apellido, paginas){
    //Propiedades 
    this.titulo = titulo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.paginas = paginas;
    this.info = function info(){//Métodos.
        let cadena = this.titulo+", pag."+this.paginas+", "+this.nombre+" "+this.apellido;
        return cadena;
    }

}

let libro1 = new Libro("El Quijote de la Mancha", "Miguel", "de Cervantes", 600);
let libro2 = new Libro("Cien años de soledad", "Gabriel", "Garcíama", 800);
alert(libro1.info())
alert(libro2.info())


