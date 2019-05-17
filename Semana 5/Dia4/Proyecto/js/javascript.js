window.addEventListener("load",function(){
    var visible = false;
    //capturando a la imagen del icono que suple al menu
    var icono = document.getElementById("menu-img");
    //capturando al menu principal
    var menu = document.getElementById("menuprincipal");
    
    //añadiendo evento escucha al click del icono
    icono.addEventListener("click",function(){
        if(visible){
            menu.style.display = "block";
            visible = false;
        }else{
            visible=true;
            menu.style.display = "none";
        }
    });
});