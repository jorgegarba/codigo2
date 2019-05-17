function generar(){
    //Valores iniciales
    var filas = parseInt(document.getElementById("filas").value);
    var columnas = document.getElementById("columnas").value;
    var defecto = document.getElementById("txtDefecto").value;
    //creando la tabla
    var tabla = document.createElement("table");
    //iterando la cantidad de filas
    for(var i = 0; i<filas; i++){
        //creando una nueva fila en cada vuelta de i
        var nuevaFila = document.createElement("tr");
        //iterando la cantidad de columnas
        for(var j = 0; j<columnas; j++){
            //creando una nueva columna en cada vuelta de j
            var nuevaColumna = document.createElement("td");
            //colocando el texto a la columna previamente creada
            nuevaColumna.innerHTML = defecto;
            //inyectando la columna a la fila
            nuevaFila.append(nuevaColumna);
        }
        //inyectando la fila a la tabla
        tabla.append(nuevaFila);
    }
    // tabla.className = "borde";
    tabla.setAttribute("class","borde");
    //inyectando la tabla al div 'resultado'
    document.getElementById("resultado").append(tabla);
}






