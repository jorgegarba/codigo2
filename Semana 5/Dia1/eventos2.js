//Función para ejecutar el código JavaScript una vez carguen todos los elementos
//del DOM
window.addEventListener("load",function(){
    var boton = document.getElementById("miBoton");
    var input = document.getElementById("miInput");
    var select = document.getElementById("miSelect");
    var div = document.getElementById("miDiv");
    //mouseover ejecutar una funcion, cuando el mouse esté encima del elemento
    boton.addEventListener("mouseover",function(){
        console.log("mouse encima del botón");
        document.getElementById("miDiv").style.backgroundColor = "#ccc";
    });
    //mouseout ejecuta una funcion cuando el mouse abandone al elemento
    boton.addEventListener("mouseout", function(){
        console.log("el mouse se fué");
        console.log(this);
        document.getElementById("miDiv").style.backgroundColor = "#aaa";
    });
    //focus ejecuta una funcion cuando el cursor esté activo en un elemento
    input.addEventListener("focus",function(mievento){
        // console.log(mievento.target);//forma 1 de imprimir el elemento
        // console.log(this);// forma 2 de imprimir el elemento
        this.style.outlineColor = "red";
    });
    //blur ejectua una función cuando se quita el focus a un elemento
    input.addEventListener("blur",function(){
        this.style.margin = "20px";
    })
    //keydown ejectua una función cuando una tecla ha sido presionada
    input.addEventListener("keydown", function(){
        console.log("Una tecla ha sido presionada");
    });
    //keyup ejecuta una función cuando una tecla deja de estar presionada
    input.addEventListener("keyup",function(){
        console.log("Una tecla ha sido soltada");
    });
    //keypress combina keydown con keyup
    input.addEventListener("keypress", function(evento){
        console.log("[Keypress] Una tecla ha sido presionada");
        console.log(evento.keyCode);
        console.log(String.fromCharCode(evento.keyCode));
    });
    //change se ejecuta cuando el valor de un select, input o textarea es cambiado
    select.addEventListener("change", function(){
        console.log(this.value);
        console.log(this.options[this.selectedIndex].innerHTML);
    });
    //dblclick se ejecuta cuando se hace doble click en un elemento
    div.addEventListener("dblclick",function(){
        this.style.backgroundColor = "#23ccf5";
    });
});