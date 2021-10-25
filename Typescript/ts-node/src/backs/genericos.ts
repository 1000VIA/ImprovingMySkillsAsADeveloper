import { printObject, genericFunction, genericFuncionArrow } from "../generics/generics";
import { Hero, Villain } from "../interfaces";



// printObject(123);
// printObject( new Date());
// printObject({ a:1, b:2, c:3 });
// printObject([1,2,3,4,5,6,7,8,10]);
// printObject('Hola Mundo');

// const name = 'Milvia'

// console.log(genericFunction(3.1416123456).toFixed(2));
// console.log(genericFunction(name).toLocaleUpperCase());
// console.log(genericFunction(new Date()).getDate());


const depool = {
    name: 'Depool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFunction<Hero>(depool).realName);
console.log(genericFunction<Villain>(depool).dangerLevel);
