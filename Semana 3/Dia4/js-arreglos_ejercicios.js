//Hacer que un cliente llene una factura
//La factura contiene n registros
//Cada registro tendrá cantidad - producto - preciounitario
//OBS: La factura debe ser representada por un arreglo
//Al final, mostrar el total de la compra

//usuario ingresa N = CANTIDAD DE REGISTROS
//usuario ingresa registro[] = cantidad, producto, preciounitario

// var n = parseInt(prompt("Ingrese cantidad de registros"));
// var factura = [];
// var total = 0;

// for(var i = 0; i < n; i++){
//    //en cada vuelta la variable "registro" se crea
//    //en un nuevo espacio de memoria
//    //y la factura ya no hace referencia al mismo espacio
//    var registro = [];
//    registro[0] = parseInt(prompt("Ingrese la Cantidad"));
//    registro[1] = prompt("Ingrese el nombre del Producto");
//    registro[2] = parseFloat(prompt("Ingrese el precio unitario"));
//    factura.push(registro);
//    total = total + registro[0] * registro[2];
// }

// console.log("total a pagar => " + total);

// var nombres = [];
// var edades = [];
// var mayor=0;
// var pos=0;


// for (var i = 0; i < 3; i++) {
//    nombres[i] = prompt("Ingrese el nombre");
//    edades[i] = parseInt(prompt("Ingrese la Edad"));
//    if(edades[i]>mayor)
//    {
//       mayor=edades[i];
//       pos=i;
//    }
// }
// console.log("Alumno mayor "+ nombres[pos]+ "   "+ edades[pos]);
// 


// var matriz = [[1,2,3,9],
//               [6,4,90,5]];    
// var matrizT = [];

// [ [1,6],
//   [2,4],
//   [3,90],
//   [9,5]  ]
//   

// for (var i = 0; i < matriz[0].length; i++) {
//    matrizT[i] = [];   
// }

// for (var i = 0; i < matriz.length; i++) { 
      
//    for(var j =0; j < matriz[i].length; j++){
      
//       matrizT[j][i] = matriz[i][j];
//    }
// }

// console.log(matrizT);