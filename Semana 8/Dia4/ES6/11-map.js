let empleados = [
    {id:1,nombre:'Fernando'},
    {id:2,nombre:"Pamela"},
    {id:3,nombre:"Omar"}
];
//asigna un nuevo arreglo de elementos
//proporcionados por la sentencia return
//es como hacer push de los elementos en un nuevo arreglo
let nombres = empleados.map(empleado => empleado.nombre);

console.log(nombres);