var persona = function (_nombre = "",_apellido="",_edad=0) {
   var nombre = _nombre;
   var apellido = _apellido;
   var edad = _edad;
   var obj = {
      mostrarEdad: function () {
         console.log("Edad = " + edad);
      },
      obtenerEdad: function () {
         return edad;
      },
      cambiarNombre: function (nuevoNombre) {
         nombre = nuevoNombre;
      },
      obtenerNombre: function () {
         return nombre;
      },
      obtenerApellido: function () {
         return apellido;
      },
      obtenerString: function () {
         return `${nombre} ${apellido} ${edad}`;
      }
   }
   return obj;
};
var per1 = persona("Jorge","Garnica",23);
var per2 = persona("Pepe","Jimenez",100);
var per3 = persona("Javier","Rodriguez",68);

var personas = [per1,per2,per3];


function findByName(_nombre, fx){
   //CONECTARSE A LA BASE DE DATOS Y TRAER A TODAS LAS PERSONAS
   for (var i = 0; i < personas.length; i++) {
      if (personas[i].obtenerNombre() == _nombre) {
         fx(null, personas[i].obtenerString());
         return;
      }
   }
   fx("ERROR",null);
}

findByName("Jorge",function(err,usuario){
   if (err) {
      console.log("no se encontro al usuario");
   }
   if (usuario) {
      console.log("ENCONTRDO: " + usuario);
   }
});




// for (var i = 0; i < personas.length; i++) {
//    document.write("Nombre: " + personas[i].obtenerNombre() + "<br/>");
//    document.write("Apellido: " +personas[i].obtenerApellido() + "<br/>");
// }
// 
// 
// 

