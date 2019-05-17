let empleados = [
    {id:1,nombre:'Fernando'},
    {id:2,nombre:"Pamela"},
    {id:3,nombre:"Omar"}
];
let salarios = [
    {id:1,salario:1000},
    {id:2,salario:2000}
];

let getEmpleado = async (id)=>{
   
    let empleadoDb = await empleados.find( empleado => empleado.id === id);

    if(!empleadoDb){//el empleado esta undefined?
        var respuesta = `No existe un empleado con el ID ${id}`;
        throw respuesta;
    }else{//el empleado si esta definido o encotnrado
        return empleadoDb;
    }
    
};



let getSalario = async (empleado)=>{
    let salarioDb = await salarios.find(item => item.id === empleado.id);
    if(!salarioDb){//el salario no ha sido encontrado dado el id
        //OJO > No confundir la llamada al callabck con un RETURN
        throw (`No se encotró un salario para ${empleado.nombre}`);
    }else{
        let usuarioYSalario ={
            id:empleado.id,
            nombre:empleado.nombre,
            salario:salarioDb.salario
        }
        return usuarioYSalario;
    }
}

let getTodo = async (id)=>{
    let empleado = await getEmpleado(id);
    let todo = await getSalario(empleado);
    return todo;
}

getTodo(2).then((todo)=>{
    console.log(todo);
}).catch((error)=>{
    console.log(error);
});