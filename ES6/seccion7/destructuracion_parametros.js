
/**
 * Destructuración de parámetros
 */

 function crearJugador(niekName, 
    {hp, sp, clase} = { hp:100, sp:55, clase:"Maago" }
    ){

        console.log(niekName, hp, sp, clase);
}

//Destructuración por párametros por defectos
crearJugador("Strider",{
    hp: 500,
    sp: 100,
    clase:"Warrior"
});

// function crearJugador(niekName, opciones){
//     opciones = opciones || {};

//     let hp = opciones.hp,
//         sp = opciones.sp,
//         clase = opciones.clase;

//         console.log(niekName, hp, sp, clase);
// }

// crearJugador("Strider",{
//     hp: 100,
//     sp: 50,
//     clase:"Mago"
// });