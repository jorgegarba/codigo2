$(function(){
    var divDatos = $('#datos');
    var btnGet = $('#btnGet');
    var btnPost = $('#btnPost');
    var btnCrear = $('#btnCrear');
    var frmCrear = $('#frmCrear');

    frmCrear.submit(function(evento){
        //se detiene el comporatmiento por defecto de un submimt normal
        //es decir, la pagina no viaja al action, ni se redirecciona
        evento.preventDefault();
        var usuarioForm = {
            name: $("input[name='name']").val(),
            job: $("input[name='job']").val()
        }

        $.ajax(
            {
                type:"POST",
                url: frmCrear.attr("action"),
                data: usuarioForm,
                contentType: "application/json",
                timeout: 1000,
                success: function(respuesta){
                    console.log(respuesta);
                },
                error: function(error){
                    console.log("Error!", error);
                },
                beforeSend: function(){
                    console.log("antes de enviar el fomrulario");
                }
            }
        );        
    });


    btnGet.click(function(){
        
        divDatos.html("");

        var datos = {
            page:2
        };
        $.get("https://reqres.in/api/users",null,function(respuesta){
            llenarTabla(respuesta.data);
        });
    });

    var usuario = {
        "name":"Jorge",
        "job":"Arquiterco"
    }

    btnPost.click(function(){
        $.post("https://reqres.in/api/users",usuario,function(respuesta){
            console.log(respuesta);
        });
    });

    function llenarTabla(usuarios){
        //creando la tabla
        var table = document.createElement("table");
        table.setAttribute("class","table");
        //creando la fila
        var trCabecera = document.createElement("tr");
        //creando las columnas de cabecera
        var thID = document.createElement("th");
        thID.innerHTML = "ID";
        var thNombre = document.createElement("th");
        thNombre.innerHTML = "Nombre";
        var thApellido = document.createElement("th");
        thApellido.innerHTML = "Apellido";
        var thAvatar = document.createElement("th");
        thAvatar.innerHTML = "Imagen";
        //inyectando las columnas de cabecera a la fila
        trCabecera.append(thID);
        trCabecera.append(thNombre);
        trCabecera.append(thApellido);
        trCabecera.append(thAvatar);
        //inyectando la fila de cabecera a la tabla
        table.append(trCabecera);
        //inyectando la tabla al div tabla
        divDatos.append(table);

        //llenar la tabla con los usuarios
        for(usuario of usuarios ){
            var trUsuario = document.createElement("tr");
            
            var tdID = document.createElement("td");
            tdID.innerHTML = usuario.id;

            var tdNombre = document.createElement("td");
            tdNombre.innerHTML = usuario.first_name;

            var tdApellido = document.createElement("td");
            tdApellido.innerHTML = usuario.last_name;

            var tdAvatar = document.createElement("td");
            var imagen = document.createElement("img");
            imagen.setAttribute("src",usuario.avatar);
            
            tdAvatar.append(imagen);
            
            trUsuario.append(tdID,tdNombre,tdApellido,tdAvatar);
            table.append(trUsuario);
        }
    }
});