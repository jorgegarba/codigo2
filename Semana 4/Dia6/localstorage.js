

function setLocalStorage(){
    //tomando el color selccionado del picker
    var color = document.getElementById("inputColor").value;
    //seteando nuestro localstorage con la clave 'colorFavorito'
    localStorage.setItem("colorFavorito",color);
    //cambiando el color de fondo del body con el valor obtenido del localstorage
    //a traves de la funcion getLocalStorage()
    getLocalStorage();
}
//funcion para setear el color de fondo tomado desde el localstorage
function getLocalStorage(){
    var miBody = document.getElementById("cuerpo");
    miBody.style.backgroundColor = localStorage.getItem("colorFavorito");
}
function removeLocalStorage(){
    localStorage.removeItem("colorFavorito");
}
//invocando a la funcion para cambiar el color de fondo cuando la pagina
// sea recargada
getLocalStorage();
//colocando el color de fondo almacenado en el localstorage al color picker
//cuando la pagina sea recargada
document.getElementById("inputColor").value = localStorage.getItem("colorFavorito");
