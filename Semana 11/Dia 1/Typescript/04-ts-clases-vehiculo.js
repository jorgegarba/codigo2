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
let carro = new Vehiculo("Verde", 50000.00, "Range Rover Evoque", "Land Rover");
console.log(carro);
