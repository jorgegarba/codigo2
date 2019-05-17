let nombre = "Superman";
let real = "Clark";

console.log("El nombre de "+nombre + " es " +real);

console.log(`El nombre de ${nombre} es ${real}`);

function getNombre(){
    return `${nombre} es ${real}`;
}

console.log(`resultado => ${getNombre()}`);
