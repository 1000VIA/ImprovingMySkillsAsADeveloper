enum Direccion {
    Arriba = 'UP', 
    Abajo = 'DOWN',
    Derecha = 'RIGHT',
    Izquierda = 'LEFT'
}
// enum Direccion {
//     Arriba = 1, 
//     Abajo = 5,
//     Derecha = 10,
//     Izquierda = 15
// }

interface Bola {
    size: number;
    posicionInicial: Direccion;
}

const bola : Bola = {
    size: 10,
    posicionInicial: Direccion.Abajo
}

console.log(bola.posicionInicial);
