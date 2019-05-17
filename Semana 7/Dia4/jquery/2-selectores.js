$(function(){
    //selectores de etiquetas
    $('p').html("Nuevo Texto del Párrafo");
    //selectores de etiquetas con posición
    $('p:eq(1)').html("Cambiando el texto del segundo parrafo");
    //selector de etiqueta por id
    var btn1 = $('#btn1');
    var btn2 = $('#btn2');
    //btn1.addEventListener('click',ocultarParrafo1);
    btn1.click(ocultarParrafo1);
    function ocultarParrafo1(){
        //javascript setAttribute("hiden","hidden")
        //jquery
        $('p:eq(0)').hide();
    }

    btn2.click(function(){
        $('p:eq(1)').hide();
    });

    $("#btnCambiarEstilo").click(function(){
        //[elemento].style.border = '1px solid #654356';
        $('p:eq(0)').css('border','1px solid #654356')
                    .css('border-radius','10px');
    });

    //añadir una clase ya creada
    $('body').click(function(){
        $('p:eq(1)').addClass('caja');
        //window.open('https://www.google.com');
    });

    $('#btnTabla').click(function(){
        $('#miTabla tr:odd').css("background-color","rgba(123,142,6,0.5)");
        $('#miTabla tr:even').css("background-color","rgba(40,142,6,0.7)");
    });


    $('#btnTablaToggle').click(function(){
        var miTabla = $('#miTabla');
        if(miTabla.hasClass("table")){
            miTabla.removeClass("table");
        }else{
            miTabla.addClass("table");
        }
    }); 

    
    
});