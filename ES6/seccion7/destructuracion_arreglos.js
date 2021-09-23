
/**
 * . Destructuración de arreglos
 */


let a = 1, b = 2, temp;

temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

//Es exactamnete lo mismo que hacer lo anterior.
[a,b] = [b,a];

console.log(a);
console.log(b);

let ArrObj = [{}]

let frutas = ["banano", "pera", "uva"];

let [fruta1, fruta2] = frutas;

console.log(fruta1, fruta2);

let [,,fruta3] = frutas;
console.log(fruta3);

let [otraFruta] = frutas;
console.log(otraFruta);