//Funciones: Bloques de código que pueden ser
//ejecutados más de una vez.
//Funcion que no retorna valor y no recibe parametros
//
//

function miFuncion(){
   console.log("Soy la función miFuncion");
   console.log("Adiós");
}
//Funcion que recibe parametros pero que no retorna valor
function suma(a,b){
   alert("la suma es" + (a+b));
}

function exponencial(nro,exponente){
   var total = 1;
   for(var i = 0; i<exponente; i++){
      total = total * nro;
   }
   alert(`${nro} elevado a ${exponente} es ${total}`);
}

function cuadrado(a){
   alert("el cuadrado es es" + (a*a));
}

function cubo(a) {
   alert("el cubo es "+ (a*a*a)); 
}

function menu(){
   alert(`Opcion 1: Suma
          Opcion 2: Cuadrado
          Opcion 3: Cubo
          Opcion 4: Salir
          Opcion 5: Exponencial`);
}

var opcion;

do{
   menu();
   opcion = parseInt(prompt("Ingresa la Opción"));
   if (opcion == 1) {
      var n1 = parseInt(prompt("Ingrsa el primer numero"));
      var n2 = parseInt(prompt("Ingrsa el segundo numero"));
      suma(n1,n2);
   }
   if (opcion == 2) {
      var n1 = parseInt(prompt("Ingrsa el numero"));
      cuadrado(n1);
   }
   if (opcion == 3) {
      var n1 = parseInt(prompt("Ingrsa el numero"));
      cubo(n1);
   }
   if (opcion == 5) {
      var n1 = parseInt(prompt("Ingrsa la base"));
      var n2 = parseInt(prompt("Ingrsa el exponente"));
      exponencial(n1,n2);
   }
}while(opcion != 4);