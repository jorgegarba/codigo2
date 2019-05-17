function inyectar(){
    //obtengo la tabla que ha sido creada a través de la función crearTabla()
    var miTabla = document.getElementById("miTabla");
    //obtengo el texto del input miInput
    var texto = document.getElementById("miInput").value;
    //creo una columna o td
    var columna = document.createElement("td");
    //inyecto el texto de miInput a la columna creada
    columna.innerHTML = texto;
    //creo una fila
    var fila = document.createElement("tr");
    //inyecto la columna en la fila
    fila.append(columna);
    //inyecto la fila a la tabla
    //append para añadir elementos hijos al final
    //prepend para añadir elementos hijos al inicio
    miTabla.prepend(fila);
}

function crearTabla(){
    //primero, creamos la tabla
    var tabla = document.createElement("table");
    //coloco el estilo a la tabla
    tabla.style.border = "1px solid #ccc";
    //Coloco un id a la tabla
    tabla.setAttribute("id","miTabla");
    //Colocamos un atributo de nombre miatributo con valor unnuevovalor
    tabla.setAttribute("miatributo","unnuevovalor");
    //Quitamos el atributo(y su valor) de nombre miatributo
    tabla.removeAttribute("miatributo");
    //creo una fila o tr
    var fila = document.createElement("tr");
    //creo una columna o td
    var columna = document.createElement("td");
    //innerHTML inyecta texto al contenido de la columna o del td
    columna.innerHTML = "Nombres";
    //inyecto la columna a la fila
    fila.append(columna);
    //inyecto la fila a la columna
    tabla.append(fila);
    //tomo el div con id 'main' e inyecto la tabla en él
    document.getElementById("main").append(tabla);
}

crearTabla();




