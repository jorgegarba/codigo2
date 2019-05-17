let obtenerApellidos = ()=>{
    return new Promise((resolve,reject)=>{
    //setTimeout ejecuta una función pasado un tiempo en mseconds
        setTimeout(()=>{
            var apellido = 'Garnica';
            resolve(apellido); 
        },2000);  
    });
}
let saludar = async ()=>{
    var ape = await obtenerApellidos()
    // obtenerApellidos().then((apellido)=>{
    //     ape = apellido;
    // });

    console.log(ape);
}
saludar();
