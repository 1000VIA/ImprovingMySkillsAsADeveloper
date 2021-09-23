
/**
 * No hay cambios en el objeto "this"  
 */

//ES6
let manejador = {
    id:"123",

    init: function(){

       document.addEventListener("click", 
       event => this.clickEnpagina(event.type))
    }, // fin del init

    clickEnpagina:function(type){
        console.log("Manejando " + type +" para el id: " + this.id);
    }
};

manejador.init();

//ES5
var manejador1 = {
    id:"123",
    init: function(){
        document.addEventListener("click", (function(event){
            this.clickEnpagina(event.type);
            console.log(this);
        }).bind(this), false);
    }, // fin del init

    clickEnpagina:function(type){
        console.log("Manejando " + type +" para el id: " + this.id);
    }
};

// manejador1.init();