$(function(){
    var miDiv = $('#miDiv');
    //cuando el mouse, se encuentra encima del elemento
    // miDiv.mouseover(function(){
    //     miDiv.css("background-color","peru");
    //     miDiv.css("width","500px");
    // });
    //cuando el mouse, sale del elemento
    // miDiv.mouseout(function(){
    //     miDiv.css("background-color","aquamarine")
    //          .css("width","200px");
    // });

    //optimizando con la función hover
    miDiv.hover(function(){
                    miDiv.css("background-color","peru");
                    miDiv.css("width","500px");
                    miDiv.css("opacity","0.1");
                },
                function(){
                    miDiv.css("background-color","aquamarine")
                        .css("width","200px")
                        .css("opacity","1");
                });
    
    miDiv.click(function(){
        $("#bolita").hide();
    });

    miDiv.dblclick(function(){
        $("#bolita").show();
    });
});