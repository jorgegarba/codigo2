// setTimeout(()=>{
//     console.log("Algo");
// },3000);

// console.log("asdasdas");

let getUsuarioById = (id,callback) => {
    let usuario = {
        id,
        nombre:"Jorge",
    }
    if(id === 10){
        callback(`El usuario de id ${id}, no existe`);
    }else{
        callback(null,usuario)
    }   
}
getUsuarioById(8,(error,usuario)=>{
   if(error !== null){
       console.log(error);
   }else{
       console.log('usuario encontrado', usuario);
   }
});

