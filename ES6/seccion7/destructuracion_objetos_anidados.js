
/**
 * Destructuración de objetos anidados   
 */



 let autoGuardado = {
    archivo:"app.js",
    cursor: {
        leinea: 7,
        columna: 16
    },
    ultimoArchivo: {
        archivo: "index.html",
        cursor: {
            leinea: 8,
            columna: 20
        }
    },
    otroNodo:{
        subNodo:{
            cursor:{
                leinea:11,
                columna:11
            }
        }
    }
};

let { cursor:cursorActivo } = autoGuardado;
console.log(cursorActivo);

let { ultimoArchivo:{ cursor:ultimoArchivo } } = autoGuardado;
console.log(ultimoArchivo);

let { otroNodo: {subNodo:{cursor:otroSuperNodo}}} = autoGuardado;
console.log(otroSuperNodo);

let otroSuperNodo2 = autoGuardado.otroNodo.subNodo.cursor;
console.log(otroSuperNodo2);