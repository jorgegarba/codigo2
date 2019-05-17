//FUNCIONES DE LOS STRING's

var texto = "qwerrewsq";

document.write("<h1>Textos</h1>");
document.write(`Texto inicial => ${texto} <br/>`);
document.write(`Tamaño de la cadena => ${texto.length} <br/>`);
document.write(`Texto en mayúsculas => ${texto.toUpperCase()} <br/>`);
document.write(`Texto en minúsculas => ${texto.toLowerCase()} <br/>`);
document.write(`Reemplazar un caracter => ${texto.replace('a','X')} <br/>`);
document.write(`Extraer una porción del texto => ${texto.slice(3,7)} <br/>`);
document.write(`Extraer una porción del texto => ${texto.slice(3,8)} <br/>`);
document.write(`Ver el caracter en una posicion dada (9) => ${texto.charAt(9)} <br/>`);
document.write(`Dividir el texto en un arreglo dado un identificador => ${texto.split(' ')[3]}`);
console.log(`Dividir el texto en un arreglo dado un identificador => ${texto.split('a')}`);
document.write(`Quitar espacios a los extremos de un texto ${texto.trim()}`);

var contador = 0;
var textomin = texto.toLowerCase();
for(var i=0; i<textomin.length; i++){
    if(textomin.charAt(i) == 'a' || 
       textomin.charAt(i) == 'e' ||
       textomin.charAt(i) == 'i' ||
       textomin.charAt(i) == 'o' ||
       textomin.charAt(i) == 'u' ){
           contador=contador+1;
    }
}

console.log(`el texto ${texto} tiene ${contador} vocales`);

///////////////////

var textoFinal = '';
for(var i = 0; i<textomin.length; i++){
    if(textomin.charAt(i) != ' '){
        textoFinal = textoFinal + textomin.charAt(i);
    }
}
console.log(textoFinal);
var tamanio =0;
if(textoFinal.length % 2 == 0){
    tamanio = textoFinal.length/2;
}else{
    tamanio = (textoFinal.length+1)/2;
}

var bandera = true;
for(var i=0; i<=tamanio;i++){
    if(textoFinal.charAt(i) != textoFinal.charAt(textoFinal.length-i-1)){
        // console.log(textoFinal.charAt(i) +" " +textoFinal.charAt(textoFinal.length-i-1));
        // console.log(textoFinal.charAt(textoFinal.length-i));
        bandera = false;
        break;
    }
}

if(bandera){
    console.log("SI ES ");
}else{
    console.log("NO ES");
}
