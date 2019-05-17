var persona = {
   nombre: "Carlos",
   apellido: "Jimenez",
   edad: 29,
   dni: "01820983",
   gustos: {
      comida: "Cebiche",
      color: "Rosado",
      curso: "Front"
   },
   talla: 1.80,
   mostrarDatos: function(){
      var mensaje = `Nombre ${this.nombre}\nApellido ${this.apellido}`;
      console.log(mensaje);
   },
   cambiarNombre: function(nuevoNombre){
      this.nombre = nuevoNombre;
   },
   obtenerDNI: function () {
      return this.dni;
   }
};


persona.mostrarDatos();
persona.cambiarNombre("Felipe");
persona.mostrarDatos();
console.log(persona.obtenerDNI());


// console.log(`Nombre: ${persona.nombre}`);
// console.log(`Gustos Color: ${persona.gustos.color}`);
// console.log(`Gustos Curso: ${persona.gustos.curso}`);