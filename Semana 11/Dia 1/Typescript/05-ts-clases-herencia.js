class Vehiculo {
    //atributos de clase
    // public color:string;
    // public precio:number;
    // public modelo:string;
    // public marca:string;
    //constructor
    // constructor(color:string,precio:number,modelo:string,marca:string){
    //   this.color = color;
    //   this.precio = precio;
    //   this.modelo = modelo;
    //   this.marca = marca;
    // }
    constructor(_color, _precio, _modelo, _marca) {
        this._color = _color;
        this._precio = _precio;
        this._modelo = _modelo;
        this._marca = _marca;
    }
    //metodos GETTERS Y SETTERS
    getColor() {
        return this._color;
    }
    setColor(nuevoColor) {
        this._color = nuevoColor;
    }
    //metodos comunes
    marcaYModelo() {
        return `${this._marca} es de modelo ${this._modelo}`;
    }
    get precio() {
        return this._precio;
    }
    set precio(nuevoPrecio) {
        this._precio = nuevoPrecio;
    }
}
class Camioneta extends Vehiculo {
    constructor(_color, _precio, _modelo, _marca, _pickUp) {
        //el objeto this no se usa por que las variables _color, _precio, etc.
        //son variables locales en la función constructora
        //el atributo this se usa cuando referenciamos a las variables de clase
        //desde otras funciones
        super(_color, _precio, _modelo, _marca);
        this._color = _color;
        this._precio = _precio;
        this._modelo = _modelo;
        this._marca = _marca;
        this._pickUp = _pickUp;
    }
    set pickUp(newPickUp) {
        this._pickUp = newPickUp;
    }
    get pickUp() {
        return this._pickUp;
    }
    getInfo() {
        console.log(`La camioneta es una ${this._marca} de modelo ${this._modelo}`);
    }
}
let miCamioneta = new Camioneta("Azul", 30000, "Amarok", "VW", true);
miCamioneta.getInfo();
