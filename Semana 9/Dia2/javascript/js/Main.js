var tecsup = new Institucion("TECSUP AQP","20600983939");
console.log(tecsup.obtenerInfo());
Institucion.imprimirDespedida();
console.log(tecsup.nombre);
tecsup.nombre = "T3CSUP AQP"
console.log(tecsup.nombre);

console.log("---------------------------------------");
var general = {
    nombre:"Jorge Garnica",
    dni:"23456783"
};

var CMFB = new Colegio("Colegio Militar Francisco Bolognesi","12345345345","Av. Siempre Viva",general);
console.log(CMFB.obtenerInfo());
console.log(CMFB.nombre);
Colegio.imprimirDespedida();

console.log(CMFB._director);