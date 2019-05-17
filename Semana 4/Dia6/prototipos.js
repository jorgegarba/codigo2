//OBJETO
var auto = function(_color){
    var color = _color;
    var obj = {
        getColor: function(){
            return color;
        }
    }
    return obj;
}
var miAuto = auto("rojo");
console.log(miAuto.getColor());

//PROTOTIPO

function Persona(_nombre,_apellido,_dni){
    this.nombre = _nombre;
    this.apellido = _apellido;
    this.dni = _dni;
    this.getNombre = function(){
        return this.nombre;
    }
    this.setNombre = function(nuevoNombre){
        this.nombre = nuevoNombre;
    }
}

var per1 = new Persona("Felipe","Contreras","01239430");
//añadir una propiedad a un objeto independiente
per1.genero = "Masculino";
var per2 = new Persona("Martha","Cáceres","20204040");
//añadir una propiedad a todo el prototipo
Persona.prototype.direccion = "Calle Luna";
//añadir un método a todo el prototipo
Persona.prototype.mostrarSaludo = function(){
    return "Este es mi saludo";
};

console.log(per1.getNombre());
console.log(per1.genero);
console.log(per2.getNombre());
console.log(per2.genero);

console.log(per1.direccion);
console.log(per2.direccion);


console.log(per1.mostrarSaludo());
