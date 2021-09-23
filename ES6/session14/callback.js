/**
 * Callbacks
 * Es una función 
 */

const getUsuarioById = (id, callback) => {

    const usuario = {
        nombre: "Milvia",
        id
    };

    if ( id === 20 ) {
        callback(`El usuario con el id ${id}, no existe`);//Mi primer argumento
        return console.error(err);
    }else{
          callback(null, usuario);
    }
};

getUsuarioById( 10, (err, usuario) => {

   if (err) {
       return console.error(err);
   }
//    console.log(`Usuario de BD ${usuario}`);//[object Object]
    console.log("Usuario de BD" , usuario);

});