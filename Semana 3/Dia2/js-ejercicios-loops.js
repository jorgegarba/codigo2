//pag 101 / ej 4.4
//programa para obtener la edad promedio de N alumnitos
//obs: las edades y la cantidad de alumnos, las proporciona
//el usuario
//ANALISIS
//1. pedir la cantidad de alumnos
//2. perdir las N edades
//2.1. guardar el n-esimo valor en una variable tmp
//2.2. acumular el valor ingresado en una variable total 
//3. calcular el promedio
//4. mostrar el promedio

var na = parseInt(prompt("Ingrese la cantidad de alumnos"));
var tmp = 0;
var total = 0;

for(var i = 1; i <= na; i++){
   tmp = parseInt(prompt(`Ingrese la edad numero ${i}`));
   total = total + tmp;
}

console.log("El promedio de edades es: " + (total/na));

//Se requiere saber el ahorro total de los ingresos vs egresos
//de los gastos mensuales de una persona.
//-El usuario debe dar el número de meses.
//-El usuario debe ingresar el ingreso y el egreso de cada mes
//El programa debe calcular el monto final en su cuenta.
