
/**
 *  Métodos concisos
 */

//ES5
var persona = {
    nombre:'Milvia, prueba ES5',
    getNombre:function(){
        console.log(this.nombre);
    }
}

persona.getNombre();


//ES6
//métodos concisos
var persona = {
    nombre:'Milvia',
    getNombre(){
        console.log(this.nombre);
    }
}

persona.getNombre();