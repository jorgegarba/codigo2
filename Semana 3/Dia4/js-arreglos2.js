//creando un arreglo
var arreglo = [1,6,4,3,2,90,190];
var arreglo2 = new Array();
var arreglo3 = [2,1,3,4,4,45];
var arreglo4 = new Array(2,3,4,6,6,7);

console.log("Arreglo => "+ arreglo);
console.log("primer elemento=>" + arreglo[0]);
console.log("ultimo elemento=>" + arreglo[arreglo.length-1]);
console.log("Push => insertar elemento al arreglo"+arreglo.push(890));
console.log("Pop => quitar elemento al arreglo"+arreglo.pop());
console.log("Pop => quitar elemento al arreglo"+arreglo.pop());
console.log("Pop => quitar elemento al arreglo"+arreglo.pop());
console.log("Arreglo => "+ arreglo);

var personas = [];
personas[0]= "Jorge";
personas[1]= "Manuel";
personas[2]= "Jimena";
console.log(personas);

var notas = [];
notas[0]= 18;
notas[1]= 19;
notas[2]= 20;
console.log(notas);

var pernotas = [];
// var persona1 = ["Jorge",13,"Masculino"];
// var persona2 = ["Javier",19,"Masculino"];

// pernotas.push(persona1);
// pernotas.push(persona2);


pernotas.push(["Jorge",13,"Masculino"]);
pernotas.push(["Javier",19,"Masculino"]);
pernotas.push(["Carlos",20,"Masculino"]);

for (var i = 0; i < pernotas.length; i++) {
   console.log(pernotas[i][0] + " => "+ pernotas[i][2]);
}



var nombres = ["Juan","Jimena","Martha"];
var edades = [20,25,67];

for (var i = 0; i < nombres.length; i++) {
   console.log(`${nombres[i]} => ${edades[i]}`);
}
