//función que recibe dos parametros que son funciones
function invoca(a, b){
    return a() + b(); 
}
function uno(){
    return 1;
}
function dos(){
    return 2;
}
//Invocamos la función
// alert(invoca(uno, dos)); 

x = function(param, funcion){
    if ((funcion) && (typeof funcion === "function")) {
        funcion(param);
    }else
    console.log(param, funcion);
}
//Ejemplo utilizando 2 parámetros de tipo string
 x("M", "A");

 //Ejemplo utilizando dos parámetros, uno de tipo string y el otro siendo una función
 x("M", function(val){
     alert(val)
 });