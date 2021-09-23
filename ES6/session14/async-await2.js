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

getEmpleado = async( id ) => {


    const empleadoBD = empleados.find( empleado => empleado.id === id);

    if (!empleadoBD) {
        //manejo el error
        throw new Error(`No existe empleado con el id ${ id }`)
    }else{
        return empleadoBD;
    }
};

const getSalario = async (empleado) => {
    const salarioBD = salarios.find( salario => salario.id === empleado.id);


    if (!salarioBD) {
        throw new Error(`No existe un salario para el empleado:  ${ empleado.nombre }`)
    }else{
        return {
            nombre: empleado.nombre,
            salario: salarioBD.salario,
            id: empleado.id
        }
    }
    
}

const getInformacion = async (id) => {

    const empleado = await getEmpleado(id);
    const resp = await getSalario(empleado);

    return `${ empleado.nombre } tiene un saliario de ${ resp.salario }`;
}

getInformacion(3).then(console.log)