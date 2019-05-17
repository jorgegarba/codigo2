// function miFuncion(n1,n2,n3){
//     console.log(n1);
//     console.log(n2);
//     n3(n1,n2);
// }

// miFuncion(12, 20, function(param1, param2){
//     console.log("el producto es: " + (param1*param2));
// });


function miFuncion(n1,n2,fx){
    console.log(n1);
    console.log(n2);
    fx(n1);
}

//funcion de flecha
miFuncion(12, 20, function(x){
    console.log("Hoal soy el callback " + x);
});

