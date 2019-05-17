//función normal
// let obtenerApellidos = ()=>{
//     return 'Garnica';
// };
// console.log(obtenerApellidos());
//la función de arriba, transformada a una promesa
// let obtenerApellidos = ()=>{
//     return new Promise((resolve,reject)=>{
//         resolve('Garnica');
//     });
// };
// obtenerApellidos().then((apellido)=>{
//     console.log(apellido);
// }).catch((error)=>{
//     console.log(error);
// });

//usando async
let obtenerApellidos = async ()=>{
    //la palabra reservada 'throw', lanza un error
    //intencional
    //throw ('Un mensaje de error a propósito');
    //la línea de arriba, equivale a reject('Un men....);
    return 'Garnica'; //equivalente a colocar resolve('Garnica');
}

let saludar = async ()=>{
    let miApellido = await obtenerApellidos();
    console.log(miApellido);
}

saludar();









// obtenerApellidos().then((apellido)=>{
//     console.log(apellido);
// }).catch((error)=>{
//     console.log(error);
// });