/**
 *  La herencia con ES6
 * JavaScript Herencia
 */

class Mascota{
    constructor(params = {}) {
        ({
            nombre:this._nombre = " Sin nombre ",
            genero:this._genero = " Sin genenero ",
            especie:this._especie = " Sin especie ",
        } = params);
        
    }
    /**
     * Getters
     */
    get nombre(){
        return this._nombre;
    }
    get genero(){
        return this._genero;
    }
    get especie(){
        return this._especie;
    }

     /**
     * Setters
     */
    set nombre(valor){
         this._nombre = valor;
    }
    set genero(valor){
        this._genero = valor;
    }
    set especie(valor){
         this._especie = valor;
    }

    /* Enunciado */
    toString(){
        return `Mi nombre es ${this._nombre} y soy un ${this._especie} y soy ${this._genero}`
    }
    
}

class Gato extends Mascota{
    constructor(params = {}){
        super({especie: "Gato"});
    }
}

let benito = new Gato();

document.write(benito.toString());
benito.nombre = " Benito Titino ";
benito.genero = " macho ";
document.write("<br>", benito.toString());