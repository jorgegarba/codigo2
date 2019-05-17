let superman = {
    nombre: "Clark",
    apellido: "Kent",
    poder: "vuela",
    getNombre: function(){
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
};

// var apellido = superman.apellido;
// var poder = superman.poder;
// var nombre = superman.nombre;

var {poder, nombre, apellido:apellidoObtenido } = superman;

console.log(`${nombre} ${poder}`);
console.log(`${apellidoObtenido}`);

