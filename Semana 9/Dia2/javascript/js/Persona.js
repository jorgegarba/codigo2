class Persona {
    constructor(newNombre,newDni){
        this._nombre = newNombre;
        this._dni = newDni;
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
    get nombre(){
        return this._nombre;
    }
    set dni(nuevoDni){
        this._dni = nuevoDni;
    }
    get dni(){
        return this._dni;
    }
    info(){
        let informacion = {
            _nombre:this._nombre,
            _dni:this._dni,
        }
        return informacion;
    }
}