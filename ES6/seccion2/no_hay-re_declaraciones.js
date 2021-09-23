/**
 * No hay re-declaraciones
 */

let mensaje = "Hola";

if (true) {
    let mensaje = "Quetal";

    console.log(mensaje);
}

console.log(mensaje);



const IMPUESTO_SV = 3.1416; //Regla es que siempre se debo INIICIALIZAR de lo contratio genera un error.
                            /*
    INPUESTO_SV = 125;       * No se puden hacer cambios en las constantes
                            */
 if (true) {
    const IMPUESTO_SV = 16.543;
    console.log(IMPUESTO_SV);
 }

console.log(IMPUESTO_SV);