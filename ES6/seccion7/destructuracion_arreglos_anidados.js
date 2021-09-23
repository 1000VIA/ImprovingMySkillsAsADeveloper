
/**
 * Destructuración de arreglos anidados.
 */


let colores1 = ["rojo", ["verde", "amarillo"], "morado", "naranja"];

let [color1, [color2]] = colores1;
console.log(color1);
console.log(color2);

let colores2 = ["rojo", "verde", "amarillo", "morado", "naranja"];


let [colorPrincipal, colorSecundario, ...demasColores ] = colores2

console.log(colorPrincipal, "=> color principal");
console.log(colorSecundario, "=> color secundario");
console.log(demasColores);

let colores3 = ["rojo", "verde"];//demasColores sería un arreglo vació

let [colorPrincipal1, colorSecundario1, ...demasColores1 ] = colores3

console.log(colorPrincipal1, "=> color principal 1");
console.log(colorSecundario1, "=> color secundario 1");
console.log(demasColores1);//demasColores sería un arreglo vació