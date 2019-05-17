$(function(){
    var input = $("#miInput");
    var miDiv = $("#miDiv");
    var bolita = $("#bolita");

    input.focus(function(){
        $(this).css("width","400px");
        $(this).css("outline","none");
        $(this).css("border","2px solid gray");
        $(this).css("border-radius","40px");
    });

    input.blur(function(evento){
        miDiv.html($(this).val());
        $(this).val("");
        console.log(evento);
    });

    //click presionado
    // miDiv.mousedown(function(){
    //     console.log("mousedown");
    // });

    //click soltado luego de ser presionado
    miDiv.mouseup(function(evento){
        console.log("X=> " + evento.clientX);
        console.log("Y=> " + evento.clientY);
    });

    //cuando el mouse se mueve
    miDiv.mousemove(function(evento){
        // console.log("X=> " + evento.clientX);
        // console.log("Y=> " + evento.clientY);
    });

    //click presionado y soltado
    // miDiv.click(function(){
    //     console.log("click");
    // });




    $(document).mousemove(function(evento){
        console.log("X => " + evento.clientX);
        console.log("Y => " + evento.clientY);
        bolita.css("left",evento.clientX+"px");
        bolita.css("top",evento.clientY+"px");
        if(evento.clientX >= 500 && evento.clientY >= 500 &&
            evento.clientX<=870 && evento.clientY<=870){
            alert("ganaste");
        }

    });

})