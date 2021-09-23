/**
 * Problemática
 */

const tareaAsincrona = () => {
    setTimeout( ()=> {
        console.log("Proceso Asincrono terminado");//2. en ejecutar
        resolve() || reject();//3. en ejecutar 
    },1300 )
}

tareaAsincrona();
console.log("Código secuncial");//1. en ejecutar 

const resolve = () => {
    console.log("Todo OK!");
}

const reject = () => {
    console.log("Todo Malo!");
}