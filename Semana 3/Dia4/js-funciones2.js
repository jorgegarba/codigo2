//FUNCIONES QUE RETORNAN VALOR Y RECIBEN PARAMETROS

function cuadrado(numero){
    return (numero*numero);
}

var n1 = cuadrado(10);
console.log(n1);

function numeros(inicio){
    var resultado = [];
    for(var i = inicio; i>0; i--){
        resultado.push(i);
    }
    return resultado;
}

console.log(numeros(16));

// PARAMETROS DE TIPO REST

function imprimirParametros(a=0,b=100,c="nada", ...x){
    console.log(c);
}

imprimirParametros(45);