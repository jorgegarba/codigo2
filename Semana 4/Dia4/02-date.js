var fecha = new Date();
document.write(`La fecha es=> ${fecha}`);
document.write(`<br/>`);

var fecha2 = new Date("July 09 1991");
document.write(`La fecha es=> ${fecha2}`);
document.write(`<br/>`);

var fecha3 = new Date(2018, 11, 1, 14, 50, 49);
document.write(`La fecha es=> ${fecha3}`);
document.write(`<br/>`);

document.write(`Año de la fecha2=> ${fecha2.getFullYear()}`);
document.write(`<br/>`);

document.write(`Día de la fecha2 + 15=> ${fecha2.getDate() + 15}`);
document.write(`<br/>`);

document.write(`Hora de la fecha 2=> ${fecha2.getHours()}`);
document.write(`<br/>`);
var hoy = new Date();
var navidad = new Date(2018,11,24);

var milisegundos = navidad - hoy;
var segundos = milisegundos/1000;
var minutos = segundos/60;
var horas = minutos/60;
var dias = horas/24;
var semanas = dias/7;

document.write(`Quedan ${semanas} semanas para navidad`);

