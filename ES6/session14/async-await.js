
 const getNombre = async() => { //Regresa una promesa


    return new Promise( (resolve, reject) => {

        setTimeout( () => {
            resolve("Milvia")
        },3000 )

    });

 }

 //para que el await funcione siempre debe estar dentro de la async(), de lo contrario no funciona
 const saludo = async() => {

     const nombre = await getNombre();//Obtenemos la promesa que ejecuta el nombre

     return `Hola ${nombre}`; //Regresamos el saludo
 }

 saludo().then(mensaje => console.log(mensaje));//Mi forma de la función saludo.



