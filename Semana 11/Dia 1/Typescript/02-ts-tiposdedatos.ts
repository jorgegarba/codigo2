// string
let cadena:string = "Un texto cualquiera";
cadena = "un nuevo valor";
// number
let numero:number = 69;
numero = 96;
//booleano
let miBooleando:boolean = true;
//any = cualquiera
let cualquiera:any = "un texto";
cualquiera = 8;
cualquiera = true;
//arreglitos
let tecnologias:Array<string> = ['Angular JS','React JS'];
let arreglosNumericos:Array<number> = [34,23,4.5];
let numeros:number[] = [2,4,4,5,5];

//variables bidatos
let alfanumerico: number | string = "un texto";
alfanumerico = 7;

//definiendo tipo de datos multidato con pseudonimot

type stringbool = string | boolean;

let bandera:stringbool = "cadenas de texto";
bandera = true;

//let vs var
var n1:number = 69;
if(n1 === 69){
  let x:number = 7;
  var y:number = 8;
}
// console.log(x); genera un error, x es local.
console.log(y);
