/**
 * Crear getter y setters en ES6
 */

class Gato{
    constructor(nombre = "minino", pelo = "negro"){
        this._nombre = nombre;
        this._pelo = pelo;
    }
    
    set nombre(valor){
        this._nombre = valor
    }

    set pelo(valor){
        this._pelo = valor;
    }

    get colorPelo(){
        return `${this._nombre} tiene el pelo color ${this._pelo}`;
    }

    toString(){
        return `${this._nombre} tiene el pelo color ${this._pelo}`;
    }

    
}

let benito = new Gato();
let cucho = new Gato("Cucho", "rosa");

document.write(benito.toString());
document.write("<br>", cucho.toString());

benito.pelo = "Azul";
benito.nombre = "Benito Titino"

document.write("<br>", benito.colorPelo);