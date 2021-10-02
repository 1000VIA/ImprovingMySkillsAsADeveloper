/**
 * La función constructora en ES6
 */

class Gato{
    constructor(arg = {}){
        ({pelo: this.pelo = "rojo", nombre: this.nombre = "minino"} = arg)
        // this.pelo = pelo;
        // this.nombre = nombre;
    }
    toString(){
        return  this.nombre + " tiene el pelo color " + this.pelo;
    }
}

let benito = new Gato({pelo:"azul", nombre: "Benito"});
let cucho = new Gato();

document.write(benito.toString());
document.write("<br>", cucho.toString());