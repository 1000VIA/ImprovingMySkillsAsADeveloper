const empleados = [{
    id: 1,
    nombre: "Milvia"
},
{
    id: 2,
    nombre: "Dayana"
},
{
    id: 3,
    nombre: "Henry"
}
]

const salarios = [{
    id: 1,
    salario: 1000
},
{
    id: 2,
    salario: 3000
}];

getEmpleado = ( id ) => {

    return new Promise( (resolve, reject) => {

        const empleadoBD = empleados.find( empleado => empleado.id === id);

        if (!empleadoBD) {
            reject(`No existe empleado con el id ${ id }`)
        }else{
            resolve( empleadoBD );
        } 

    });
};

const getSalario = (empleado) => {

    return new Promise( (resolve, reject) => {
        const salarioBD = salarios.find( salario => salario.id === empleado.id);

        if (!salarioBD) {
            reject(`No existe us salario para el empleado:  ${ empleado.nombre }`)
        }else{
            resolve({
                nombre: empleado.nombre,
                salario: salarioBD.salario,
                id: empleado.id
            })
        }
        })
    
}

getEmpleado( 1 )
    .then( getSalario )
    .then( console.log)
.catch(err => {
    console.error(err)  

});
