var constructor = function(_nombre="S/N", _apellido="S/A",_edad=0){
   var objeto = {
      nombre: _nombre,
      apellido: _apellido,
      edad: _edad,
      mostrarNombre: function () {
         console.log(this.nombre);
      },
      cambiarNombre: function (nuevoNombre) {
         this.nombre = nuevoNombre;
      }
   };
   return objeto;
};

var persona1 = constructor("Gabriel","Carpio",90);
var persona2 = constructor("Joaquin","Adarmes",101);
var persona3 = constructor("Pablo","Arenas",250);

console.log(persona1);
console.log(persona2);
console.log(persona3);
console.log("///////////////////////////")
persona3.cambiarNombre("Kattia");

console.log(persona1);
console.log(persona2);
console.log(persona3);