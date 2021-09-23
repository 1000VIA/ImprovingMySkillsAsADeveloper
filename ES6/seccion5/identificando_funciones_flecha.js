
/**
 *  Identificando funciones de flecha y otros ejemplos
 */


let restar = (a,b) => a - b;

console.log(typeof restar);
console.log(restar instanceof Function);

//Lo que le digo es que ejecute la función restar y la función restar sustrae los dos números
// let restar2 = new restar(1,2);

let restar2 =  restar(1,2);

function ejemplo(x,y){
    ((a,b)=>{
    console.log(arguments[2]);
    })();   
}

ejemplo(10, 20, 30);
