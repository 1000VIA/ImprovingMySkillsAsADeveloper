/**
 * Inicializaciones de los mapas parq que tenga valores por defecto.
 */

//Un unico arreglo que dentro de el tiene todos los arreglos de los objetos
//Se le mandan los valores al map para que sea inicializado por default.
let mapa = new Map( [ ["nombre", "Milvia"], [ "apellido","Alvarez" ] ] );//arreglos que contienen la llave y el valor

console.log(mapa);
console.log(mapa.get("apellido"));//Para obtener el valor mando como parametro la llave.
