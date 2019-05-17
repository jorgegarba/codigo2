//Condicional if
var n1 = 601;
//Comparadores aritmeticos
// < menor
// > mayor
// <= menor o igual
// >= mayor o igual
// != diferente
// == igual que
// === igual en valor e igual en tipo de gato

if (n1 > 600) {
   console.log(n1 + "es mayor que 600");
}else{
   console.log(n1 + "es menor o igual que 600");
}


if(n1 === 56){
   console.log(n1 + " es igual que 56 en valor y en tipo de gato");
}
if(n1 === "56"){
   console.log(n1 + " es igual que 56");
}





var prenda = "Chompa";
var precio = 300;
var precio_final;

if (precio >= 500) {
   precio_final = precio * (85/100);
   console.log("Total a pagarsh => " + precio_final);
}else{
   precio_final = precio * (90/100);
   console.log("Total a pagarsh => " + precio_final);
}


var dia = "Domingo";

if (dia != "Lunes") {
   console.log("Hoy no es lunes y hay 50% dcto.");
}

//Comparadores Lógicos
// Y  - AND - &&
// O  - OR  - ||
// NO - NOT - !

var mi_variable = 80;

if((mi_variable >= 50) && (mi_variable <= 100)){
   console.log( mi_variable + " => está entre 50 y 100");
}

var year = 1900;

if ( ( (year%4==0) && (year%100!=0) ) || (year%400==0) ) {
   console.log("El año " +year + " es bisiesto");    
}else{
   console.log("El año " +year + " no es bisiesto");    
}


// SWITCH // SWITCH CASE

// var opcion = parseInt(prompt("¿Qué opción elige?"));
var opcion = 2;
var n1=34;
var n2=10;
var operacion="";
var total=0;

switch (opcion) {
   case 1:
      operacion = "Suma";
      total = n1+n2;
      break;
   case 2:
      operacion = "Resta";
      total = n1-n2;
      break;
   case 3:
      operacion = "Multiplicación";
      total = n1*n2;
      break;
   case 4:
      operacion = "División";
      total = n1/n2;
      break;
   default:
      operacion = "ERROR";
      break;
}

console.log("El resultado de la "+operacion+ " es " + total);


//OPERADOR TERNARIO
if (opcion>3) {
   console.log("Mayor");
}else{
   console.log("Menor");
}

console.log(opcion > 3 ? "Mayor": "Menor");

var resultado = opcion > 3 ? "Mayor" : 45;