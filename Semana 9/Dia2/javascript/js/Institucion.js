class Institucion {
    
    //El constructor es la función que se ejecuta
    //cuando el objeto es creado ó
    //cuando la clase es instanciada
    constructor(newNombre, newRuc){
        this._nombre = newNombre;
        this._ruc = newRuc;
        console.log("Se ha creado un objeto INSTITUCIÓN");
    }

    //Getter función que devuelve o envia o retorna el valor de una propiedad
    get nombre(){
        return this._nombre;
    }
    //Setter función que recibe un valor y loa signa a una propiedad
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }

    //función normal
    //es ejecutada sólo cuando se llama a la función
    obtenerInfo(){
        let info = {
            _nombre:this._nombre,
            _ruc:this._ruc
        };
        return info;
    }

    //función estática
    //las funciones estaticas sólo pueden ser llamadas
    //y ejecutadas sin necesidad de crear un objeto
    //solo se hace referencia a la clase
    static imprimirDespedida(){
        console.log("Adiós");
    }

}