
function cambiarColor(color){
    miSeccion.style.color = color;    
}

function darFormato(){
    miSeccion.style.fontSize = "20px";
    miSeccion.style.border = "1px solid red";
}

function aumentar(){
    var parrafo = document.getElementById("parrafo");
    var tamanio = window.getComputedStyle(parrafo).fontSize;
    
    //obtener el tipo de dato de una variable
    console.log(typeof tamanio);
    console.log(tamanio.length);
    console.log(tamanio);
    var tamanioInt = parseInt(tamanio.slice(0,tamanio.length-2));
    tamanioInt = tamanioInt + 2;
    parrafo.style.fontSize = tamanioInt+"px";
}

function negrita(){
    var parrafo = document.getElementById("parrafo");
    
    if(parrafo.style.fontWeight == 'bold'){
        parrafo.style.fontWeight = 'normal';
    }else{
        parrafo.style.fontWeight = 'bold';
    }
}

var miSeccion = document.getElementById("seccion");

darFormato();
aumentar();

