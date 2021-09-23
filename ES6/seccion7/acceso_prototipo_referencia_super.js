
/**
 *  Acceso al prototipo con la referencia "SUPER"
 */

let persoona = {
    saludar(){
        return "Hola";
    }
};

let amigo = {
    saludar(){
        // return Object.getPrototypeOf(this).saludar.call(this) + ", saludos!!!"; ES5
        return super.saludar() + ", saludos"; //ES6
    }
}


//Si no hay herencia edl prototipo eso genera un error.
Object.setPrototypeOf( amigo, persoona)//Heredamos las propiedades de persona y se las paso al amigo.
console.log(amigo.saludar());