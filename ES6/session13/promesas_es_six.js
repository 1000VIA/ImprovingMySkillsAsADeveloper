/**
 * Promesas ES6
 * El reject es opcional
 */

const tareaAsincrona = () => {

    let promesa = new Promise(  (resolve, reject ) => {

        setTimeout( ()=> {
            console.log("Proceso Asincrono terminado");//2. edespúes de 1:30 se cumplio
            resolve();//3. Se ejecuta despues de que se cumpla la promesa.
        },1300)
        
    })

    return promesa;
 
}

tareaAsincrona().then( () => {
    console.log("Todo OK!!");    
}, ()=>console.error("Todo Mal!"));

console.log("Código secuncial");//1. en ejecutar mientras se cumple la promesa.


