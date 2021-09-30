/**
 * Modificar propiedades y métodos de un objeto
 * - Podemos iniciar el objeto vacío y añadimos
 *   por medio de la sintaxis punto.
 * - Borrar unas propiedades con delete.
 * - Añadimos por medio de la sintaxis punto. 
 */
 

let libro = {};

libro.titulo = "El quijote de la Mancha";
libro.autor = {nombre:"Miguel", apellido:"de Cervantes"};
libro.paginas = 800;
libro.info = function(){
    let cadena = this.titulo+" , "+this.autor.nombre+" "+this.autor.apellido;
    return cadena;
}

document.write(" "+ libro.info());
delete libro.paginas;//Para borrar una propiedad de forma dinamica.

document.write(libro.paginas)