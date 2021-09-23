
/**
 *  Parametros por defecto
 */


//Primero los parametros que siempre van a ir y luego los opcionales
const saludo = (mensaje = "Hola Mundo", tiempo = 1500)=>{ //Los parametros opcionales pueden ser cualquier cosa, objetos, arreglos, texto, funciones
    //ES5
    // mensaje = mensaje || "Hola Mundo";
    // mensaje = (typeof mensaje !== "undefined")? mensaje : "Hola Mundo2"

    setTimeout(()=>{
        console.log(mensaje);
    }, tiempo);
};

saludo()

// Si el fn no recibe un párametro usa toda la definición que se tenga fnTemporal
const saludar2 = (fn = fnTemporal, persona = {nombre:"Milvia"})=>{

    console.log(typeof fn);

    if(typeof fn === "undefined"){
        console.error('No es una función ');
        return;
    }
    fn();
    console.log(persona); //Elpárametro por defecto es persona
}

const fnTemporal = () => console.log("Hola Mundo FN");
var persona = {
    nombre: "Dayana"
};


saludar2(fnTemporal, persona)