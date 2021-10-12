//Función con nombre o nombrada

function funcion1( x: number, y: number): number{
    return x + y;
}

//Función anónima
let funcion2 = function(x: number, y: number){
    return x + y;
}

//arrow function
    const funcion3 = (x: number, y: number) => x + y


console.log(funcion1(6, 5));
console.log(funcion2(9, 2));
console.log(funcion3(8, 3));


export default {}