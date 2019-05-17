$(function(){
    var btnMostrar = $('#btnMostrar');
    var btnOcultar = $('#btnOcultar');
    var btnToggle = $('#btnToggle');
    var btnAnimar = $('#btnAnimar');
    
    var miDiv = $('#miDiv');

    btnOcultar.click(function(){
        miDiv.hide('slow',function(){
            console.log("la animación ha terminado");
        });
    });
    

    var echele50 = {

    }

    var derecha = {
        marginLeft:'400'
    };

    var abajo = {
        marginTop:'400'
    };

    var izquierda = {
        marginLeft:'0'
    };

    var arriba = {
        marginTop:'0'
    };

    function rotarMiDiv(elemento,grados){
        elemento.animate({deg: grados}, {
            duration: 500,
            step: function(now) {
                miDiv.css({
                    transform: 'rotate(' + now + 'deg)'
                });
            }
        });
    }
    btnAnimar.click(function(){
        //promesas
        miDiv.animate(derecha,'slow');
        rotarMiDiv(miDiv,90);
        miDiv.animate(abajo,'slow');
        rotarMiDiv(miDiv,180);
        miDiv.animate(izquierda,'slow')
        rotarMiDiv(miDiv,270);
        miDiv.animate(arriba,'slow')
        rotarMiDiv(miDiv,360);
    });
})