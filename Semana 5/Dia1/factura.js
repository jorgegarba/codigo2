//FORMATO DE LA BASE DE GATOS
window.addEventListener("load", function () {
    var botonGuardar = document.getElementById("btnGuardar");
    var botonMostrar = document.getElementById("btnMostrar");
    var BD = [
        {
            id: 1,
            nombre: "Play Station 4",
            precio: 1600.00,
        },
        {
            id: 2,
            nombre: "Nintendo Wii",
            precio: 1000.00,
        },
        {
            id: 3,
            nombre: "Camara Nikon D5200",
            precio: 4500.00,
        }
    ];
    

    //guardar base de datos en el localStorage
    botonGuardar.addEventListener("click", function () {
        var bdString = JSON.stringify(BD);
        console.log(BD);
        console.log(bdString);
        localStorage.setItem("data",bdString);

    });
    //mostrar la base de datos alojada en el localstorage
    botonMostrar.addEventListener("click",function(){
        var stringBd = localStorage.getItem("data");
        var jsonBd = JSON.parse(stringBd);
        console.log(stringBd);
        console.log(jsonBd);
    });
});


