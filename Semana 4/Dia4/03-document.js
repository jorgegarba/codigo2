//Query Selector
//-----getElementById
//obtiene un elemento del DOM dado su id

var h1 = document.getElementById("titulo");
//h1 es un objeto de tipo ELEMENT
console.log(h1.id);

//-----getElementsByTagName
//Obtiene todos los elementos del DOM que coincidan
//con el nombre de la etiqueta dada
//Devuelve un Arreglo
var parrafos = document.getElementsByTagName("p");

for (var i = 0; i < parrafos.length; i++) {
   console.log(parrafos[i].id);
}

//-----querySelector
//Obtiene el primer elemento del DOM que coincidan
//con el lenguaje Query de CSS
//Devuelve un elemento

var elemento = document.querySelector("section > p");
console.log(elemento);

var elemento2 = document.querySelector("#titulo");
console.log(elemento2);

//-----querySelectorAll()
//Obtiene todos los elementos DOM que coincidan
//con el lenguaje Query de CSS
//Devuelve un Arreglo

var elementos = document.querySelectorAll("section > p");
console.log(elementos);
