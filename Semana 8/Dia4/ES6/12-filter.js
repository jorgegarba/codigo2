let empleados = [
    {id:1,nombre:'Fernando'},
    {id:2,nombre:"Pamela"},
    {id:3,nombre:"Omar"},
    {id:4,nombre:"Paul"}
];
//asigna un nuevo arreglo dado por la sentencia return
//la sentencia return debe evaluar las reglas o comparaciones
let nombresConP = empleados.filter(empleado => empleado.nombre.charAt(0)=='P');

console.log(nombresConP);