
/**
 *   Nuevo método: Object.is()
 */

//ES5


//ES6

console.log( + 0 == -0);
console.log( + 0 === -0);
console.log(Object.is(+0, -0));

console.log("======");


console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN)); //Los objetos no son números


console.log("======");

console.log(5 == 5);
console.log(5 == "5");

console.log(5 === 5);
console.log(5 === "5");

console.log("====== 5 contra 5 ======");

console.log(Object.is(5,5));
console.log(Object.is(5,"5"));