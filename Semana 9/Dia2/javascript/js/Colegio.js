class Colegio extends Institucion{
    //se sobreescribe la función constructora del padre
    //ahora se respeta el cosntructror del hijo(Colegio es el hijo)
    constructor(newNombre,newRuc,newDireccion,newDirector){
        //super() hace una llamada al constructor de la clase padre
        //Institucion es la clase padre
        super(newNombre,newRuc);
        this._direccion = newDireccion;
        this._telefono = "sin numero";
        this._director = new Persona(newDirector.nombre,newDirector.dni,);
    }

    get direccion(){
        return this._direccion;
    }

    set direccion(nuevaDireccion){
        this._direccion = nuevaDireccion;
    }
}