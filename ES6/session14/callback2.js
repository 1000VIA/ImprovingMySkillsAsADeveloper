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
    }
]

getEmpleado = (id, callback) => {
    const empleadoBD = empleados.find( empleado => empleado.id === id);

    if (!empleadoBD) {
        callback(`No existe empleado con el id ${ id }`)
    }else{
        callback(null, empleadoBD)
    }
};

const getSalario = (empleado, callback) => {

    const salarioBD = salarios.find( salario => salario.id === empleado.id);

    if (!salarioBD) {
        callback(`No existe us salario para el empleado:  ${ empleado.nombre }`)
    }else{
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioBD.salario,
            id: empleado.id
        })
    }
}

//Uso de la función 

getEmpleado(3, (err, empleado) => {

    if (err) {
       return console.error(err);
    }

    getSalario(empleado, (err, resp)=>{
            if (err) { return console.error(err);}
            console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
    });
})

