
/**
 *  Cómo los valores por defecto afectan el objeto "arguments"
 */


 function sumar1(a = 1, b = 2){
     console.log(arguments)
    } 

 sumar1()

//arguments: en arrow function no está definida
const sumar = (a, b) => console.log(arguments);

sumar(1, 2, 5, "Milvia", {a:1, b:2})

