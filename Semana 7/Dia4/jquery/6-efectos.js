$(function(){
    var btnMostrar = $('#btnMostrar');
    var btnOcultar = $('#btnOcultar');
    var btnToggle = $('#btnToggle');
    var miDiv = $('#miDiv');

    miDiv.hide();

    btnMostrar.click(function(){
        //miDiv.show('slow');//slow y fast
        //miDiv.fadeIn('slow');
        miDiv.fadeTo('slow',0.5);
    });

    btnOcultar.click(function(){
        //miDiv.hide('slow');
        //miDiv.fadeOut('slow');
        miDiv.fadeTo('slow',0);
    });

    btnToggle.click(function(){
        // miDiv.toggle('slow');
        // miDiv.slideToggle('slow');
        miDiv.fadeToggle('slow');
    });

});