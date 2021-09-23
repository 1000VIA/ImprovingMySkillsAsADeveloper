
/**
 * Destructuración de objetos   
 */


let ajustes = {
    nombre : "Milvia Alvarez",
    email : "milvia@unlimitech.cloud",
    facebook : "milviaalvarez11",
    google : "milviaalvarez11",
    premium : true,
    twitter : "milviaalvarez11"
};

//ES6
//premium: dePago => Cambiar nombre de la propiedad
//twitter = "milviaalvarez11" => Agregar una nueva propiedad.
let {nombre, email, facebook, premium, twitter:cuentaTwi = "1000VIA"} = ajustes;
// let { nombre, email, facebook, google, premium: dePago, twitter = "milviaalvarez11" } = ajustes; // Siempre se debe inicializar el objeto

console.log(cuentaTwi);

//ES5 => es bastante tedioso
// let nombre = ajustes.nombre,
//     email = ajustes.email,
//     facebook = ajustes.facebook,
//     google = ajustes.google,
//     premium = ajustes.premium;

//     console.log(nombre, email, facebook, google, premium);
