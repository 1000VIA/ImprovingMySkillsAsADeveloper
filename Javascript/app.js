//Variables globales

const formularioUI = document.querySelector('#formulario');
const listaActividadesUI = document.getElementById('listaActividades')
let arrayActividades = [];


//Funciones
const CrearItem = (actividad) => {

    let item = {
        actividad: actividad,
        estado: false
    }

    arrayActividades.push(item);
    return item;
}

const GuardarDB = () => {

    localStorage.setItem('rutina', JSON.stringify(arrayActividades));

    PintarDB();

}

const PintarDB = () => {

    listaActividadesUI.innerHTML = '';

    arrayActividades = JSON.parse(localStorage.getItem('rutina')); 

    if (arrayActividades === null) {
        arrayActividades = [];
    }else{
        arrayActividades.forEach(element => {

            if (element.estado) {
                listaActividadesUI.innerHTML += `<div class="alert alert-success d-flex justify-content-between align-items-center mt-2" role="alert"><div class="d-flex"><i class="material-icons mx-2"> accessibility </i><b>${element.actividad}</b> - ${element.estado}</div><span class="d-flex align-items-center"><div class=""><i class="material-icons ">done</i><i class="material-icons">delete</i></div></span></div>`
            }else{
                listaActividadesUI.innerHTML += `<div class="alert alert-danger d-flex justify-content-between align-items-center mt-2" role="alert"><div class="d-flex"><i class="material-icons mx-2"> accessibility </i><b>${element.actividad}</b> - ${element.estado}</div><span class="d-flex align-items-center"><div class=""><i class="material-icons ">done</i><i class="material-icons">delete</i></div></span></div>`
            }
        });
    }

}

const EliminarDB = (actividad) =>{

    let indexArray;

    arrayActividades.forEach((element, index)=>{

        if (element.actividad == actividad) {
            indexArray = index;
        }
    });

    arrayActividades.splice(indexArray, 1);
    GuardarDB();
}

const EditarDB = (actividad) => {

    let indexArray = arrayActividades.findIndex((element) =>  element.actividad === actividad);
    arrayActividades[indexArray].estado = true;
    GuardarDB();
}


//Eventlistener

formularioUI.addEventListener('submit', (e) => {
    e.preventDefault();
    let actividadUI = document.querySelector('#actividad').value;

    CrearItem(actividadUI);//crear elemento
    GuardarDB();

    formularioUI.reset();

})

document.addEventListener('DOMContentLoaded', PintarDB);

listaActividadesUI.addEventListener('click', ( e ) => {

    e.preventDefault();

    if (e.target.innerHTML === 'done' || e.target.innerHTML === 'delete') {
        let texto = e.path[3].childNodes[0].childNodes[1].innerHTML;
        if (e.target.innerHTML === 'delete') {
            //Acción de eliminar
            EliminarDB(texto);
        }
        if (e.target.innerHTML === 'done') {
            //Acción de editar
            EditarDB(texto);
        }
    }
})

