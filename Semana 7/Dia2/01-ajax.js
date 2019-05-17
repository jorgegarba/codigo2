window.addEventListener("load",function(){
    var usuarios = "";
    var btnGetData = document.getElementById("btnGetData");
    var divTabla = document.getElementById("tabla");

    btnGetData.addEventListener("click",function(){
        divTabla.innerHTML="";
        var img = document.createElement("img");
        img.setAttribute("src","./loading.gif");
        divTabla.append(img);
        traerDatos();
    });

    function traerDatos(){
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function(){
            //La funcion se ejecuta cuando la propiedad -readystate- cambia
            if(xhr.readyState == 3){
                
            }
            if(xhr.readyState == 4){
                usuarios = JSON.parse(xhr.responseText).data;
                console.log(usuarios);
                divTabla.innerHTML = "";
                llenarTabla(usuarios);
            }
        };
        xhr.open("GET","https://reqres.in/api/users?page=2");
        xhr.send(null);//headers
    }

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
        divTabla.append(table);

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
            imagen.setAttribute("src","./loading.gif");
            colocarImagen(imagen,usuario.avatar);
            tdAvatar.append(imagen);
            
            trUsuario.append(tdID,tdNombre,tdApellido,tdAvatar);
            table.append(trUsuario);
        }
    }

    function colocarImagen(imagen,avatar){
        console.log(imagen)
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 3){
                console.log("cargando");
            }
            if(xhr.readyState == 4){
                imagen.setAttribute("src",avatar);
            }
        };
        xhr.open("GET",avatar);
        xhr.send(null);
    }
});