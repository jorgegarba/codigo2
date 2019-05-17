window.addEventListener("load",function(){
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
    //Inicialización de variables y elementos
    var select = document.getElementById("slProductos");
    function llenarSelect(){
        
        for(let i = 0; i<BD.length; i++){
            var option = document.createElement("option");
            option.value = BD[i].id;
            option.text = BD[i].nombre;
            select.append(option);
        }
    }

    select.addEventListener("change",function(){
        
    });
    
    

    llenarSelect();
});
