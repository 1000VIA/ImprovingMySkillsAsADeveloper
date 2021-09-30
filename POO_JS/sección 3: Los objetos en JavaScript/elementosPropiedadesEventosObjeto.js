/**
 * Elementos, propiedades y eventos de un objeto.
 * - En un arreglo se concidera que tiene "elementos"
 * - En un ojeto decimos que contiene "propiedades"
 * - Si un objeto contiene una función, se le considera un "método"
 * Tambien podemos almacenar una función en un arreglo, pero es poco común.
 * Para acceder a una propiedad o métdo de un objeto, podemos utilizar:
 * - La notación de punto(recomendada)
 * - Notación de corchetes (menos usada)
 */

let libro = {
    titulo: "El quijote de la mancha",
    paginas: 600,
    editorial:"Diana",
    autor:{
        nombre:" Miguelito",
        apellido:" de Cervantes"
    }
}

console.log(libro.titulo);
document.write(libro["paginas"]);
document.write(libro["autor"].nombre);
document.write(libro.autor.nombre, libro.autor.apellido);
document.write(libro["autor"]["apellido"]);//No es muy recomendable