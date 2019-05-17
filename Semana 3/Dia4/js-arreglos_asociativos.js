var arreglo = [];

arreglo["nombre"] = "Jorge";
arreglo["edad"] = 13;

console.log(arreglo["nombre"]);
console.log(arreglo["edad"]);

var personas = [];

var per1 = [];
per1["nombre"] = "Paul";
per1["edad"] = "56";

var per2 = [];
per2["nombre"] = "Jimena";
per2["edad"] = "45";

personas.push(per1,per2);

console.log(per1);
console.log(personas);

for(var i = 0; i < personas.length; i++){
   console.log(personas[i]["nombre"] + "=> " +personas[i]["edad"]);
}