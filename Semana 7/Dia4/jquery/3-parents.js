$(function(){
    $("li.item-2").find("li").css("background-color","peru")
                            .css("color","white");
    
    $('li.item-a').parent()
                    .parent()
                    .parent()
                    .parent()
                    .css("background-color","lightblue");

    
});