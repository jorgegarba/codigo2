let empleados = [
    {id:1,nombre:'Fernando'},
    {id:2,nombre:"Pamela"},
    {id:3,nombre:"Omar"}
];
let salarios = [
    {id:1,salario:1000},
    {id:2,salario:2000}
];

let getEmpleado = (id)=>{
    return new Promise((resolve,reject)=>{

        let empleadoDb = empleados.find( empleado => empleado.id === id);

        if(!empleadoDb){//el empleado esta undefined?
            var respuesta = `No existe un empleado con el ID ${id}`;
            reject(respuesta);
        }else{//el empleado si esta definido o encotnrado
            resolve(empleadoDb);
        }
    });
};



let getSalario = (empleado)=>{
    return new Promise((resolve,reject)=>{
        let salarioDb = salarios.find(item => item.id === empleado.id);
        if(!salarioDb){//el salario no ha sido encontrado dado el id
            //OJO > No confundir la llamada al callabck con un RETURN
            reject(`No se encotró un salario para ${empleado.nombre}`);
        }else{
            let usuarioYSalario ={
                id:empleado.id,
                nombre:empleado.nombre,
                salario:salarioDb.salario
            }
            resolve(usuarioYSalario);
        }
    })
}
//la función then, es disparada a través de la función resolve
//la función then, recibe el parametro que envíe 'resolve'
getEmpleado(2).then((empleado)=>{
    return getSalario(empleado);
}).then((empleadoConSalario)=>{
    console.log(empleadoConSalario);
}).catch((error)=>{
    console.log(error);
});
