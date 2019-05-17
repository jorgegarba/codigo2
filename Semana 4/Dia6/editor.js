function negrita(){
    var texto = document.getElementById("texto");
    if(texto.style.fontWeight == 'bold'){
        texto.style.fontWeight = 'normal';
    }else{
        texto.style.fontWeight = 'bold';
    }
}

function aumentar(){
    var texto = document.getElementById("texto");
    var tamanio = window.getComputedStyle(texto).fontSize;
    var tamanioInt = parseInt(tamanio.slice(0,tamanio.length-2));
    tamanioInt = tamanioInt + 2;
    texto.style.fontSize = tamanioInt+"px";
}

function reducir(){
    var texto = document.getElementById("texto");
    var tamanio = window.getComputedStyle(texto).fontSize;
    var tamanioInt = parseInt(tamanio.slice(0,tamanio.length-2));
    tamanioInt = tamanioInt - 2;
    texto.style.fontSize = tamanioInt+"px";
}

function oblicua(){
    var texto = document.getElementById("texto");
    if(texto.style.fontStyle == 'italic'){
        texto.style.fontStyle = 'normal';
    }else{
        texto.style.fontStyle = 'italic';
    }
}

function subrayado(){
    var texto = document.getElementById("texto");
    if(texto.style.textDecoration == 'underline'){
        texto.style.textDecoration = 'none';
    }else{
        texto.style.textDecoration = 'underline';
    }
}
