$(function(){
    //draggable = elementos pueden ser arrastrados
    $('.elemento').draggable();
    //resizable = los elementos pueden ser redimensionables
    $('.elemento').resizable();
    //selectable = los elementos pueden ser seleccionados(clickados)
    // $('.lista').selectable();
    //sortable = los elementos pueden ser re-ordenables
    $('.lista').sortable(
        {
            update: function(event, ui){
                console.log("La lista ha cambiado");
            }
        }
    );

    function ordenarLista(){
        //forEach de Javascript es "each" en JQuery
        // $('.lista > li').each(function(index,elemento){
        //     console.log(index);
        //     console.log(elemento);
        // });
        //
        var ordenadas = [];

        var lis = $('.lista > li');

        for(var i=0; i < lis.length; i++){
            ordenadas.push(lis[i].innerHTML);
        }
        ordenadas.sort();
        console.log(ordenadas);
    }

    ordenarLista();

    $('.contenido').draggable();
    //droppable = permite que los elementos detecten si otro elemento
    //ha sido soltado dentro del mismo.
    $('.contenedor').droppable({
        drop: function(){
            console.log("Han soltado un elemento en el contenedor");
            $(this).css('background-color','orangered');
        }
    });

    $('#btnAnimar').click(function(){
        // $('#objetivo').effect("explode");
        //$('#objetivo').toggle("bind");
        // $('#objetivo').toggle("slide",2000);
        // $('#objetivo').toggle("drop");
        // $('#objetivo').toggle("puff",2000);
        // $('#objetivo').toggle("fold",2000);
        // $('#objetivo').toggle("scale");
        $('#objetivo').effect("shake",50);
    });

    $(document).tooltip();

    $("#btnAbrirModal").click(function(){
        $('#modal').dialog();
    });

});