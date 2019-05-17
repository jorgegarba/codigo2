let empleados = [
                    {id:1,nombre:'Fernando'},
                    {id:2,nombre:"Pamela"},
                    {id:3,nombre:"Omar"}
                ];

let salarios = [
                    {id:1,salario:1000},
                    {id:2,salario:2000}
                ];

let getEmpleado = (id,callback)=>{
    let empleadoDb = empleados.find( empleado => empleado.id === id);
    if(!empleadoDb){//el empleado esta undefined?
        var respuesta = `No existe un empleado con el ID ${id}`;
        callback(respuesta);
    }else{//el empleado si esta definido o encotnrado
        callback(null,empleadoDb);
    }
};

let getSalario = (empleado,callback)=>{
    let salarioDb = salarios.find(item => item.id === empleado.id);
    if(!salarioDb){//el salario no ha sido encontrado dado el id
        //OJO > No confundir la llamada al callabck con un RETURN
        callback(`No se encotró un salario para ${empleado.nombre}`);
    }else{
        callback(null,salarioDb);
    }
}


getEmpleado(3,function(error,empleado){
    if(error){
        //no se encotró ni siquiera el empleado
        //por que la variable 'error' está setteada, asignada o con valor
        console.log("Error!!!!!",error);
    }else{
        //como la variable 'error', no tiene valor, es decir, tiene null
        //si ha llegado un valor a la variable 'empleado'
        getSalario(empleado,function(error,salario){
            if(error){
                console.log(`Error, se encontró a empleado 
                            ${empleado.nombre} pero no se encontró un salario`);
            }else{
                var empleadoSalario = {
                    id:salario.id,
                    nombre:empleado.nombre,
                    salario:salario.salario,
                }
                console.log("EXITO ", empleadoSalario);
            }
        });
    }
})







// getEmpleado(1,function(error,empleado){
//         if(error){//el error existe? esta definido? tiene valor?
//             console.log(error);
//         }else{
//             console.log("Si funciona", empleado);
//         }
//     });





