
/**
 *  Literal Templates y templates con tags
 */


//templates con tags
const etiqueta = (literales, ...substituciones)=> {

    let resultado = "";

    console.log(literales);
    console.log(substituciones);

    for(let i = 0; i < substituciones.length; i++){
        resultado += literales[i]
        resultado += substituciones[i]
    }

    return resultado;
};

let unidades = 5, costo_unitario = 10;

let mensaje = etiqueta`${unidades} los lapices cuestan ${unidades * costo_unitario} pesos`

console.log(mensaje);


//Literal Templates
const obtenerNombre = () => "María Pérez"

let nombre = "Juanita";
let apellido = "Perez";

let nombreCompleto = `El nombre completo es ${nombre} ${apellido}`;

console.log(nombreCompleto);

let nombreCompleto2 = `El nombre completo es ${obtenerNombre()}`;
console.log(nombreCompleto2);


let multiLinea = `<h1 class="algo">${nombre}</h1>
<p>Hola ${apellido}</p>`
console.log(multiLinea);