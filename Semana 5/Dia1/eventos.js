// function agregarEvento(){
//     var boton = document.getElementById("btnPrueba");
//     boton.onclick = mostrarMensaje;
// }

// function mostrarMensaje(){
//     alert("Buenas =)");
// }

// window.onload = agregarEvento;

function agregarEvento(){
    var boton = document.getElementById("btnPrueba");
    //los eventos se asignan sin la letra "on"
    boton.addEventListener("click", function(){
        alert("Buenas =)");
    });
}

window.addEventListener("load",agregarEvento);